import React from 'react';
import { FormControl, InputGroup, Button} from 'react-bootstrap';
import './Styles.css'
import { getAllRecipes } from '../../api/recipes'
import { useState } from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import { FaPepperHot } from "react-icons/fa";
import { FaFish} from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
// import {NavLink} from 'react-router-dom'
function ShowJumbotron(props) {
    // const [searchInput, setSearchInput] = useState("")
    // function handleSearch(search){
            const {setSearchInput, hidden, setHidden} = props
            const {searchRecipes, setSearchRecipes} = props
            // const [selected, setSelected] = useState("")
            console.log("setstate", setSearchInput)
            console.log("this is setsearchre======", searchRecipes)

    // const handleChange = (e) => {
    //     recipe.recipeName.toLowerCase().includes(searchInput.toLowerCase())
    // }
    const handleFilter =(selectedType) => {
        setHidden(!hidden)
        console.log('HIDDEN STATE',hidden)
        const newFilteredRecipes = props.recipes.filter((filterType)=> filterType.recipeType?.includes(selectedType))

        props.setFilterRecipe(newFilteredRecipes)
    }
  return (
    <div className='my-jumbotron'>
        <div className='jumbotron-text'>
            <h1>Welcome to RecipeTap!</h1>
            <h2>The Endless<span>Recipe </span></h2></div>
        <div className='button-input'>
            <InputGroup className='mb-3'>
                <FormControl
                    placeholder="Search For Recipe Here"
                    aria-label='Meal Search Input'
                    aria-aria-describedby="meal-search-button"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                

                <Button variant="danger" id="meal-search-button">
                    Button
                </Button>
            </InputGroup>
        </div>
        {/* this is where we will have the food icons */} 
       <div className='react-icons'>
            <button onClick={() => handleFilter("Italian")} >
                <FaPizzaSlice 
                />
                    <h4>Italian</h4>
                
            </button>
            <button onClick={() => handleFilter("Indian")} >
                <FaPepperHot 
                />
                    <h4>Indian</h4>
            </button>
            <button onClick={() => handleFilter("SeaFood")} >
                <FaFish 
                />
                    <h4>SeaFood</h4>

            </button>
            <button onClick={() => handleFilter("American")} >
                <FaHamburger 
                />
                <h4>American</h4>
            </button>
            <button onClick={() => handleFilter("Japanese")} >
                <GiNoodles 
                />
                    <h4>Japanese</h4>
            </button>
        </div> 
    </div>
  )
}

export default ShowJumbotron