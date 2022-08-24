import { useState } from 'react'
import { createRecipe  } from '../../api/recipes'
import { useNavigate } from 'react-router-dom'
import { createRecipeFailure, createRecipeSuccess } from '../shared/AutoDismissAlert/messages'
import RecipeForm from '../shared/RecipeForm'

const CreateRecipe = (props) => {
    console.log('these are the props in createRecipe\n', props)
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [recipe, setRecipe] = useState({
        recipeCreater: '',
        recipeName: '',
        image: '',
        Ingredient: ''
    })

    console.log('this is  recipe createRecipe', recipe)

    const handleChange = (e) => {
        setRecipe(prevRecipe => {
            // updatedValue is the value of a variable
            let updatedValue = e.target.value
            // updatedName is the name of of the variable
            const updatedName = e.target.name
            // here we get the datatype of the variable
            console.log('this is the input type', e.target.type)
            const updatedRecipe = {
                [updatedName]: updatedValue
            }
            return {
                ...prevRecipe,
                ...updatedRecipe
            }
        })
    }

    // We'll add a handleSubmit here that makes an api request, then handles the response
    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        createRecipe(user, recipe)
            // if we're successful, navigate to the show page for the new recipe
            .then(res => { navigate(`/recipes/${res.data.recipe._id}`)})
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createRecipeSuccess,
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: createRecipeFailure,
                    variant: 'danger'
                })
            )
    }

    return (
        <RecipeForm 
            recipe={ recipe } 
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
            heading="Add a new recipe!"
        />
    )
}

export default CreateRecipe