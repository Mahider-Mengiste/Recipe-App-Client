// we already have the data
import { useState } from 'react'
import RecipeIndex from './recipes/RecipeIndex'
import ShowJumbotron from './Jumbotron/ShowJumbotron'
// import { getAllRecipes } from '../api/recipes'

const Home = (props) => {
	const [searchInput, setSearchInput] = useState(null)
	 const [searchRecipes, setSearchRecipes] = useState(null);
	const [recipes, setRecipes] = useState(null)
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
				<ShowJumbotron 
				setSearchInput = {setSearchInput}
				setSearchRecipes = {setSearchRecipes}
				searchRecipes = {searchRecipes}
				recipes={recipes}
				/>
			</div>
			<RecipeIndex 
			msgAlert={ msgAlert }
			input = {searchInput}
			recipes={recipes}
			setRecipes={setRecipes}
			searchRecipes = {searchRecipes}
			/>
		</>
	)
}

export default Home
