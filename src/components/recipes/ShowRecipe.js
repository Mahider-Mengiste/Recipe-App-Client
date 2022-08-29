import { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page

import { Container, Card, Button } from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneRecipe, updateRecipe, removeRecipe} from '../../api/recipes'
import messages from '../shared/AutoDismissAlert/messages'
import EditRecipeModal from './EditRecipeModal'
import NewCommentModal from '../comments /NewCommentModal'
import ShowComment from '../comments /ShowComment'

// We need to get the recipe's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

// we'll use a style object to lay out the leash cards
const cardContainerLayout = {
   
}

const ShowRecipe = (props) => {
    const [recipe, setRecipe] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [commentModalShow, setCommentModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [counter, setCounter] = useState(1)
    const [like, setLike] = useState(1)
    const [dislike, setDislike] = useState(0)

    const { id } = useParams()
    console.log('this is the id for the show recipe',id)
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { user, msgAlert } = props
    console.log('user in props', user)
    console.log('the recipe in showRecipe', recipe)
    // destructuring to get the id value from our route parameters

    // useEffect(() => {
    //     getOneRecipe(id)
    //         .then(res => setRecipe(res.data.recipe))
    //         .catch(err => {                   
    //             msgAlert({
    //                 heading: 'Error getting recipe',
    //                 message: messages.getRecipesFailure,
    //                 variant: 'danger'
    //             })
    //             // navigate('/')
    //             //navigate back to the home page if there's an error fetching
    //         })
    // }, [updated])
    // console.log('this is recipe in the useeffect', recipe)

     useEffect( function ()  {
    async function getMyRecipe () {
        const myRecipe = await  getOneRecipe(id)
        setRecipe(myRecipe.data.recipe)
        console.log("this is my recipe please work", myRecipe)
    }
    getMyRecipe()
    }, [updated])

    // here we'll declare a function that runs which will remove the recipe
    // this function's promise chain should send a message, and then go somewhere
    const removeTheRecipe = () => {
        console.log('user, recipe id', user, recipe.id)
        removeRecipe(user, recipe._id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeRecipeSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => {navigate('/')})
            // on failure send a failure message
            .catch(err => {                   
                msgAlert({
                    heading: 'Error removing recipe',
                    message: messages.removeRecipeFailure,
                    variant: 'danger'
                })
            })
    }

    let commentCards 
    if (recipe) {
        if (recipe.comments.length > 0) {
            commentCards = recipe.comments.map(comment => (
                <ShowComment 
                    key={comment._id}ƒ
                    comment={comment}
                    recipe={recipe}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        }
    }

    if (!recipe) {
        return <LoadingScreen />
        }
        console.log(user, recipe)
    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>
                        { recipe.recipeCreator}
                    </Card.Header>
                    <Card.Header>
                        { recipe.recipeName }
                    </Card.Header>
                    <Card.Header>
                        { recipe.recipeType }
                    </Card.Header>

                    <Card.Body>
                        <img src={recipe.image} alt={recipe.recipeName}></img>
                         <div><small>Ingredient: { recipe.Ingredient }</small></div>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setCommentModalShow(true)}
                            className="m-2" variant="info"
                        >
                            Add a comment!
                        </Button>
                        {
                            recipe.owner && user && recipe.owner._id === user._id 
                            ?
                            <>
                                <Button onClick={() => setEditModalShow(true)} 
                                    className="m-2" 
                                    variant="warning"
                                >
                                    Update Recipe
                                </Button>
                                <Button onClick={() => removeTheRecipe()}
                                    className="m-2"
                                    variant="danger"
                                >
                                    Delete Recipe
                                </Button>
                            </>
                            :
                            null
                        }
                    </Card.Footer>
                </Card>
            </Container>
            <Container style={cardContainerLayout}>
                {commentCards}
            </Container> 
            
            <EditRecipeModal 
                user={user}
                recipe={recipe} 
                show={editModalShow} 
                updateRecipe={updateRecipe}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)} 
            />
            <NewCommentModal 
                recipe={recipe}
                show={commentModalShow}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setCommentModalShow(false)} 
            />
        </>
    )
}

export default ShowRecipe


