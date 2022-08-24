import { 
    useState, 
    useEffect 
} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllRecipes } from '../../api/recipes'
import messages from '../shared/AutoDismissAlert/messages'


const cardContainerStyle = {
   
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 255, 255)'
}

// RecipessIndex should make a request to the api
// To get all recipes
// Then display them when it gets them


const RecipesIndex = (props) => {
    const [recipes, setRecipes] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    console.log('Props in RecipesIndex', props)

    // useEffect( () => {
    //     console.log(props)
    //     getAllRecipes()
    //         .then(res => setRecipes(res.data.recipes))
    //         .catch(err => {
    //             msgAlert({
    //                 heading: 'Error Getting Recipes',
    //                 message: messages.getRecipesFailure,
    //                 variant: 'danger',
    //             })
    //             setError(true)
    //         })
    // }, [])

    useEffect( function ()  {
    async function getMyRecipes () {
        const myRecipes = await getAllRecipes() 
        setRecipes(myRecipes.data.recipes)
        console.log("this is my recipes", myRecipes)
    }
    getMyRecipes()
    }, [])
    console.log("this is my recipes", recipes)
    if (error) {
        return <p>Error!</p>
    }

    // If recipes haven't been loaded yet, show a loading message
    if (!recipes) {
        return <LoadingScreen />
    } else if (recipes.length === 0) {
        return <p>No recipes yet. Better add some.</p>
    }

    const recipeCards = recipes.map(recipe => (
                <Card
                 key={recipe.id}
                  style={
                    {
                        backgroundColor: 'rgb(255, 255, 244)',
                        width: '340px',
                        height: '350',
                        borderRadius: '10px',
                        boxShadow: 'box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                        marginLeft: '10px',
                        marginRight: '10px',
                        marginTop: '25px',
                        marginBottom: '5px',
                        border: '2px solid 	#D0D0D0'
                        
                        

                        
                    }
                }
                >
                <Link to={`/recipes/${recipe._id}`}
                    style={
                        {
                            
                            textAlign: 'center',
                            textDecoration: 'none',
                            fontSize: '19px',
                            color: 'rgb(56, 55, 55)'
                        }
                    }
                >   
                    <Card.Header>
                        {recipe.recipeName}
                    </Card.Header>
                    <Card.Header
                    style={
                        {
                            fontSize: '15px'
                        }
                    }
                    >
                        Creater Name: {recipe.recipeCreater}
                    </Card.Header>
                </Link>
                <Card.Body  
                style={
                    {
                        // backgroundColor: 'red',
                        width: '18rem',
                        margin: '9px'
                        

                    }
                }
                >
                    <Link to={`/recipes/${recipe._id}`}>
                        <img 
                        src={recipe.image} 
                        alt={recipe.recipeName}
                        style={
                                    {
                                        // borderBlockStyle: 'dashed',
                                        width: '18rem',
                                        height: '18rem',
                                        padding: '0px',
                                        borderRadius: '4px',
                                        border: '2px solid #F5F5F5',
                                        

                            
                                    }
                                }
                        ></img>
                    </Link>
                </Card.Body>
                <Card.Footer>
                    <div 
                    style={
                        {
                            textAlign: 'center',
                        }
                    }>
                        <Link to={`/recipes/${recipe._id}`}
                        style= {
                            {
                                textDecoration: 'none',
                                fontSize: '19px',
                                color: '#cc0052'
                            }
                        }
                        >
                            View recipe
                        </Link>
                    </div>
                </Card.Footer>
            </Card >
            
    ))

    return (
        <div 
        style={ cardContainerStyle }
        >
            { recipeCards }
        </div>
    )
}

export default RecipesIndex