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
            const {setSearchInput} = props
            const {searchRecipes, setSearchRecipes} = props
            console.log("setstate", setSearchInput)
            console.log("this is setsearchre======", searchRecipes)

    // const handleChange = (e) => {
    //     recipe.recipeName.toLowerCase().includes(searchInput.toLowerCase())
    // }


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
            <button onClick={(e) => setSearchRecipes("italian")} >
                <FaPizzaSlice 
                />
                    <h4>Italian</h4>
                
            </button>
            <button onClick={(e) => setSearchRecipes("Indian")} >
                <FaPepperHot 
                />
                    <h4>Indian</h4>
            </button>
            <button onClick={(e) => setSearchRecipes("seaFood")} >
                <FaFish 
                />
                    <h4>SeaFood</h4>

            </button>
            <button onClick={(e) => setSearchRecipes("american")} >
                <FaHamburger 
                />
                <h4>American</h4>
            </button>
            <button onClick={(e) => setSearchRecipes("japanese")} >
                <GiNoodles 
                />
                    <h4>Japanese</h4>
            </button>
        </div>
    </div>
  )
}

export default ShowJumbotron