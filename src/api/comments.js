import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createComment = (user, recipeId, newComment) => {
    console.log('the user in createComment', user)
    console.log('the newComment in createComment', newComment)
	return axios({
		url: `${apiUrl}/create-comment/${recipeId}`,
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { comment: newComment }
	})
}

// UPDATE comment
export const updateComment = (user, recipeId, updatedComment) => {
    console.log('this is updatedComment', updatedComment)
	return axios({
		url: `${apiUrl}/edit-comment/${recipeId}/${updatedComment._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { comment: updatedComment }
	})
}

// DELETE comment
export const deleteComment = (user, recipeId, commentId) => {
	return axios({
		url: `${apiUrl}/delete-comment/${recipeId}/${commentId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}