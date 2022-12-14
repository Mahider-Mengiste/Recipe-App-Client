import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import  CommentForm  from '../shared/CommentForm'
import { createComment } from '../../api/comments'
import { Form, Button, Container } from 'react-bootstrap'

const NewCommentModal = (props) => {
    const { user, recipe, show, handleClose, msgAlert, triggerRefresh } = props

    const [comment, setComment] = useState({})

    const handleChange = (e) => {
        setComment(prevComment => {
            let value = e.target.value
            const name = e.target.name
            const updatedComment = {
                [name]: value
            }
            return {
                ...prevComment,
                ...updatedComment
            }
        })
    }

    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()
        // console.log('+++++++', user)
        console.log(comment)
        createComment(user, recipe._id, comment)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Added!',
                    message: 'Comment created!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong, try again',
                    variant: 'danger'
                })
            )
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                {/* <CommentForm 
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Write a comment"
                /> */}
                <h3>Write a comment</h3>
                <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="note">Comment</Form.Label>
                <Form.Control
                    placeholder="Comment"
                    name="note"
                    id="note"
                    onChange={ handleChange }
                />
                <button
                 type="submit"
                 className="m-2" 
                style={
                        {
                            backgroundColor: 'rgb(255, 255, 255)',
                            height:'30px',
                            width: '100px',
                            borderRadius: '5px',
                            color: ' #cc0052',
                            border: '2px solid 	#D0D0D0',
                        }
                    }
                 >Submit</button>
            </Form>
            </Modal.Body>
        </Modal>
    )
}

export default NewCommentModal