import { 
    useState, 
    useEffect 
} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllRecipes } from '../../api/recipes'

const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 255, 255)'
}

const RecipesIndex = (props) => {
    const [error, setError] = useState(false)
    const [filtered, setFiltered] = useState({})
    const [hidden, setHidden] = useState(false)

    const { msgAlert, input, recipes, setRecipes, searchRecipes, setSearchRecipes, setSearchInput, filterRecipe, setFilterRecipe } = props
    console.log("props", input,recipes, setRecipes, searchRecipes)
    console.log('Props in RecipesIndex', props)

    useEffect( function ()  {
    async function getMyRecipes () {
        const myRecipes = await getAllRecipes() 
        setRecipes(myRecipes.data.recipes)
        console.log("this is state recipe", recipes)
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
        return <p>No recipes yet, Please check back in a while</p>
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
                    <Card.Header>
                        {recipe.recipeType}
                    </Card.Header>
                    <Card.Header
                    style={
                        {
                            fontSize: '15px'
                        }
                    }
                    >
                        Creater Name: {recipe.recipeCreator}
                    </Card.Header>
                </Link>
                <Card.Body  
                style={
                    {
                        maxWidth: '17rem',
                        margin: 'auto'
                    }
                }
                >
                    <Link to={`/recipes/${recipe._id}`}>
                        <img 
                        src={recipe.image} 
                        alt={recipe.recipeName}
                        style={
                                    {
                                        maxHeight: '17rem',
                                        maxWidth: '15rem',
                                        padding: '0px',
                                        borderRadius: '4px',
                                        border: '2px solid #C0C0C0',
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

    const searchResults = recipes.filter((recipe) => {
        return recipe["recipeName"].includes(input)
        
    })
        const displayResults = searchResults.map((searchResult) => {
            setSearchRecipes("")
        return <Card
                key={searchResult.id}
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
                <Link to={`/recipes/${searchResult._id}`}
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
                        {searchResult.recipeName}
                    </Card.Header>
                    <Card.Header
                    style={
                        {
                            fontSize: '15px'
                        }
                    }
                    >
                        Creater Name: {searchResult.recipeCreator}
                    </Card.Header>
                </Link>
                <Card.Body  
                style={
                    {
                        // backgroundColor: 'red',
                        maxWidth: '17rem',
                        margin: 'auto'
                    }
                }
                >
                    <Link to={`/recipes/${searchResult._id}`}>
                        <img 
                        src={searchResult.image} 
                        alt={searchResult.recipeName}
                        style={
                                    {
                                        // borderBlockStyle: 'dashed',
                                        maxHeight: '17rem',
                                        maxWidth: '15rem',
                                        padding: '0px',
                                        borderRadius: '4px',
                                        border: '2px solid #C0C0C0',
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
                        <Link to={`/recipes/${searchResult._id}`}
                        style= {
                            {
                                textDecoration: 'none',
                                fontSize: '19px',
                                color: '#cc0052',
                                fontFamily: 'Libre Baskerville serif'
                            }
                        }
                        >
                            View recipe
                        </Link>
                    </div>
                </Card.Footer>
            </Card >
        })
        console.log("this is search results", searchResults)
    return (
        <div 
        style={ cardContainerStyle }
        >   
            { input ? displayResults  : recipeCards }
        </div>
    )
}
export default RecipesIndex