// we already have the data
import { useState } from 'react'
import RecipeIndex from './recipes/RecipeIndex'
import ShowJumbotron from './Jumbotron/ShowJumbotron'
// import { getAllRecipes } from '../api/recipes'

const Home = (props) => {
	// search iiput
	const [searchInput, setSearchInput] = useState(null)
		// filter input
	 const [searchRecipes, setSearchRecipes] = useState("");
	const [recipes, setRecipes] = useState(null)
	  const [filterRecipe, setFilterRecipe] = useState([])
	  const [hidden, setHidden] = useState(false)
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
				setFilterRecipe = {setFilterRecipe}
				hidden={hidden}
				setHidden ={setHidden}
				
				/>
			</div>
			<RecipeIndex 
			msgAlert={ msgAlert }
			input = {searchInput}
			recipes={recipes}
			setRecipes={setRecipes}
			searchRecipes = {searchRecipes}
			setSearchRecipes = {setSearchRecipes}
			filterRecipe = {filterRecipe}
			setSearchInput = {setSearchInput}
			setFilterRecipe = {setFilterRecipe}
			hidden={hidden}
			setHidden ={setHidden}
			/>
		</>
	)
}

export default Home
