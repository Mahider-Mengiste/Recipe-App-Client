import { useState, useEffect } from 'react'

import { useParams, useNavigate, BrowserRouter } from 'react-router-dom'
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page

import { Container, Card, Button } from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneRecipe, updateRecipe, removeRecipe} from '../../api/recipes'
import messages from '../shared/AutoDismissAlert/messages'
import EditRecipeModal from './EditRecipeModal'
import NewCommentModal from '../comments /NewCommentModal'
import ShowComment from '../comments /ShowComment'
import {FaRegComment} from "react-icons/fa";

const cardContainerLayout = {
}

const ShowRecipe = (props) => {
    const [recipe, setRecipe] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [commentModalShow, setCommentModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)


    const { id } = useParams()
    console.log('this is the id for the show recipe',id)
    const navigate = useNavigate()
    const { user, msgAlert } = props
    console.log('user in props', user)
    console.log('the recipe in showRecipe', recipe)

    useEffect( function ()  {
    async function getMyRecipe () {
        const myRecipe = await  getOneRecipe(id)
        setRecipe(myRecipe.data.recipe)
        console.log("this is my recipe please work", myRecipe)
    }
    getMyRecipe()
    }, [updated])

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
            <Container className="fluid"
            style={
                {
                    // border: '2px solid red',
                    
                }
            }
            >
                <Card
                    style={
                        {
                            backgroundColor: 'white'
                        }
                    }
                >   
                <div style={{ color: '#101010',textAlign: 'center', fontFamily: 'AmstelvarAlpha'}}>
                    <Card.Header
                        style={
                            {
                                textAlign: '#202020',
                                fontFamily:'Libre Baskerville serif',
                                fontSize: '30px'
                            }
                        }
                    >
                        { recipe.recipeName }
                    </Card.Header>
                    <Card.Header>
                        Recipe Creator: { recipe.recipeCreator}
                    </Card.Header>
                    <Card.Header>
                        { recipe.recipeType }
                    </Card.Header>
                </div>

                    <Card.Body
                    style={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                maxHeight: '30rem',
                                justifyContent: 'center'
                            }
                        }
                    >
                        <img 
                            src={recipe.image}
                            alt={recipe.recipeName}
                            style={
                                {
                                    maxHeight: '25rem',
                                    borderRadius: '100px',
                                    border: '1px solid 	#E8E8E8',
                                    padding: '0px',
                                    textAlign: 'center'
                                }
                            }
                        >
                        </img>
                        <br/>
                        <div
                        style={
                                { 
                                    marginLeft: '50px',
                                    maxWidth: '500px',
                                }
                            }
                        >
                            <small
                            style={
                                {
                                    lineHeight: '21pt',
                                    color: '#606060',
                                    fontFamily: 'Urbanist sans-serif',
                                    fontSize: '19px'
                                }
                            }
                            >
                                INSTRUCTION: { recipe.Instruction }
                            </small>
                        </div>
                    </Card.Body>
                    <Card.Footer
                    style={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'start'
                            }
                        }
                    >   
                        <button
                        onClick={() => setCommentModalShow(true)}
                        style={{
                            border: '2px solid #F8F8F8',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent:'space-around',
                            textAlign: 'center',
                            color: '#696969',
                            backgroundColor: '#F8F8F8',
                            borderRadius: '19px',
                        }}
                        >   <FaRegComment style={{ border: '5px solid white',fontSize: '34px', marginLeft: '40px', marginTop: '-6px'}} />
                            add a comment
                        </button>
                        {
                            recipe.owner && user && recipe.owner._id === user._id 
                            ?
                            <div style={{backgroundColor: 'white', marginLeft: '600px', borderRadius: '3px'}}>
                            
                                <button onClick={() => setEditModalShow(true)} 
                                    className="m-2" 
                                        style={
                                        {
                                            backgroundColor: 'rgb(255, 255, 255)',
                                            height:'50px',
                                            borderRadius: '5px',
                                            color: ' #cc0052',
                                            border: '2px solid 	#D0D0D0',
                                        }
                                    }
                                    
                                >
                                    Update Recipe
                                </button>
                                <button onClick={() => removeTheRecipe()}
                                    className="m-2"
                                    style={
                                        {
                                            backgroundColor: 'rgb(255, 255, 255)',
                                            height:'50px',
                                            borderRadius: '5px',
                                            color: ' #cc0052',
                                            border: '2px solid 	#D0D0D0',
                                        }
                                    }
                                >
                                    Delete Recipe
                                </button>
                            </div>
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


