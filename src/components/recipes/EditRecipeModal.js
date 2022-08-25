import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import RecipeForm from '../shared/RecipeForm'
import { updateRecipeSuccess, updateRecipeFailure } from '../shared/AutoDismissAlert/messages'
import { useParams, useNavigate } from 'react-router-dom'

const EditRecipeModal = (props) => {
    const { 
        user, show, handleClose, 
        updateRecipe, msgAlert, triggerRefresh
    } = props
    const navigate = useNavigate()
    const [recipe, setRecipe] = useState(props.recipe)

    console.log('recipe in edit modal', recipe)

    const handleChange = (e) => {
        setRecipe(prevRecipe => {
            // updatedValue is a value of a variable 
            let updatedValue = e.target.value
            // updatedName is a variable name
            const updatedName = e.target.name
            // here we get datatype of a variable
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

    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        updateRecipe(user, recipe)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            // send a success message to the user
            // .then(() => triggerRefresh())

            // .then(()=> { navigate(`/recipes/${recipe._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: updateRecipeSuccess,
                    variant: 'success'
                })
            })
            // if everything is successful, we need to trigger our refresh for the show page
            // this is that setUpdated function in showRecipe component
            // updated is in ShowRecipe's useEffect's dependency array
            // changes to the updated boolean cause ShowRecipe' s useEffect to run again.
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: updateRecipeFailure,
                    variant: 'danger'
                })
            )
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <RecipeForm 
                    recipe={recipe}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update recipe"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditRecipeModal
