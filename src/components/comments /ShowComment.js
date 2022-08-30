import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditCommentModal from './EditCommentModal'
import { deleteComment } from '../../api/comments'


const ShowComment = (props) => {
    // destructure some props
    const { comment, recipe, user, triggerRefresh, msgAlert } = props
    // here's where we'll put a hook to open the edit comment modal when we get there
    const [editModalShow, setEditModalShow] = useState(false)

    const removeComment = () => {
        deleteComment(user, recipe._id, comment._id)
            .then(() => 
                msgAlert({
                    heading:'Deleted',
                    message: 'Comment has been deleted',
                    variant: 'success'
                }))
            .then(() => triggerRefresh())
            .catch(() => 
                msgAlert({
                    heading:'Unsuccessful',
                    message: 'Couldnt delete comment',
                    variant: 'danger'
                }))
    }
    return (
        <>
            <Card className='m-2'
            style={{height:'90px'}}
            >
                <Card.Header>{comment.email}</Card.Header>
                <Card.Body>
                    <p>{comment.note}</p>
                </Card.Body>
                <Card.Footer>
                    {
                        user && user._id === comment.owner 
                        ?
                        <div 
                        style={{height: '50px'}}
                        >
                            <button onClick={() => setEditModalShow(true)}
                            className="m-2" 
                                        style={
                                        {
                                            backgroundColor: 'rgb(255, 255, 255)',
                                            height:'30px',
                                            borderRadius: '5px',
                                            color: ' #cc0052',
                                            border: '2px solid 	#D0D0D0',
                                        }
                                    }
                            >Edit Comment</button>
                            <button  onClick={() => removeComment()}
                            className="m-2" 
                                        style={
                                        {
                                            backgroundColor: 'rgb(255, 255, 255)',
                                            height:'30px',
                                            borderRadius: '5px',
                                            color: ' #cc0052',
                                            border: '2px solid 	#D0D0D0',
                                        }
                                    }
                            >Delete Commment</button>
                        </div>
                        :
                        null
                    }
                </Card.Footer>
            </Card>
            <EditCommentModal 
                user={user}
                recipe={recipe}
                comment={comment}
                show={editModalShow}
                handleClose= {() => setEditModalShow(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
    )



}

export default ShowComment 