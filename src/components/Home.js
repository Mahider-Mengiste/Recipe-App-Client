// we already have the data
// import { useState, useEffect } from 'react'
import RecipeIndex from './recipes/RecipeIndex'
import ShowJumbotron from './Jumbotron/ShowJumbotron'
// import { getAllRecipes } from '../api/recipes'

const Home = (props) => {
	// const [recipes, setRecipes] = useState([])
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	// useEffect( function ()  {
    // async function getMyRecipes () {
    //     const myRecipes = await getAllRecipes() 
    //     setRecipes(myRecipes.data.recipes)
    //     console.log("this is my recipes homepage", myRecipes)
    // }
    // getMyRecipes()
    // }, [])
	return (
		<>
			<div 
			className='jumbotron'>
				<ShowJumbotron />
			</div>
			<RecipeIndex 
			msgAlert={ msgAlert }
			/>
		</>
	)
}

export default Home
