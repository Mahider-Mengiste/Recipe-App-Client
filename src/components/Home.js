import RecipeIndex from './recipes/RecipeIndex'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<>

			<RecipeIndex 
			msgAlert={ msgAlert }
			/>
		</>
	)
}

export default Home
