import { 
    useState, 
    useEffect 
} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllRecipes } from '../../api/recipes'
import messages from '../shared/AutoDismissAlert/messages'

// RecipessIndex should make a request to the api
// To get all recipes
// Then display them when it gets them

// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

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
        <Card style={{ width: '30%', margin: 5 }} key={recipe.id}>
            <Link to={`/recipes/${recipe._id}`} style={{ textDecoration: 'none', color: 'black'}}><Card.Header style={{backgroundColor: 'pink', textAlign: 'center', fontSize: '40px', fontWeight: 'bold'}} >{recipe.recipeName}</Card.Header></Link>
            <Card.Body>
                <Link to={`/recipes/${recipe._id}`}><img src={recipe.image} alt={recipe.recipeName}></img></Link>
            </Card.Body>
            <Card.Footer style={{backgroundColor: 'pink', color: 'brown', fontSize: '25px', fontWeight: 'bold' }}>
                <div>
                    <Link to={`/recipes/${recipe._id}`}>View recipe</Link>
                </div>
            </Card.Footer>
        </Card >

    ))

    return (
        <div style={ cardContainerStyle }>
            { recipeCards }
        </div>
    )
}

export default RecipesIndex