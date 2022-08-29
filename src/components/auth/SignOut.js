import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <h2 style={{color: '#383838', textAlign: 'left'}}>Are you sure you want to sign out?</h2>
                    <small>
                        We hate to see you go...
                    </small>
                    <br/>
                    <ButtonGroup>
                        
                        <Button 
                        onClick={onSignOut}
                        style={
                            {
                                backgroundColor: 'rgb(255, 255, 255)',
                                border: '2px solid 	#D0D0D0',
                                textAlign:'center',
                                marginTop: '30px',
                                color: ' #cc0052',
                                width: '150px',
                                marginRight: '25px'
                                
                                
                            }
                        }
                        >
                            Sign Out
                        </Button>
                        <Button 
                        onClick={onCancel}
                        style={
                            {
                                backgroundColor: 'rgb(255, 255, 255)',
                                border: '2px solid 	#D0D0D0',
                                textAlign:'center',
                                marginTop: '30px',
                                color: ' #cc0052',
                                width: '150px',
                            }
                        }
                        >
                            Cancel
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
		</>
	)
}

export default SignOut
