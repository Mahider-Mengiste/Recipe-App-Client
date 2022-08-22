import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => INDEX
export const getAllRecipes = () => {
    return axios(`${apiUrl}/view-all-recipes`)
}

// READ => SHOW
export const getOneRecipe = (id) => {
    return axios(`${apiUrl}/view-recipe/${id}`)
}

// CREATE
export const createRecipe = (user, newRecipe) => {
    // console.log('createRecipe in api was hit')
    // in our createrecipe form, we're building an object
    // when we pass that object into the api createRecipe function,
    // it's going to look like the recipes in our database
    // we're going to refer to this as newRecipes
    // console.log('this is user', user)
    // console.log('this is newRecipes', newRecipes)
	return axios({
		url: apiUrl + '/create-recipe',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { recipe: newRecipe }
	})
}

// UPDATE
export const updateRecipe = (user, updatedRecipe) => {
    // console.log('createRecipe in api was hit')
    // in our createrecipe form, we're building an object
    // when we pass that object into the api createRecipe function,
    // it's going to look like the recipes in our database
    // we're going to refer to this as newRecipe
    // console.log('this is user', user)
    console.log('this is updatedRecipe', updatedRecipe)
	return axios({
		url: `${apiUrl}/edit-recipe/${updatedRecipe.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { recipe: updatedRecipe }
	})
}

// DELETE
export const removeRecipe = (user, recipeId) => {
    return axios({
        url: `${apiUrl}/delete-recipe/${recipeId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}