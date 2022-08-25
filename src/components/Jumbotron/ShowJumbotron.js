import React from 'react';
import { FormControl, InputGroup, Button} from 'react-bootstrap';
import './Styles.css'

function ShowJumbotron() {
    // const [searchInput, setSearchInput] =useState("")
    // function handleSearch(search){

    // }
  return (
    <div className='my-jumbotron'>
        <div className='jumbotron-text'>
            <h1>Welcome!</h1>
            <h2>Food Recipe made <span>EASY</span></h2></div>
        <div className='button-input'>
            <InputGroup className='mb-3'>
                <FormControl
                    placeholder="Search For Recipe Here"
                    aria-label='Meal Search Input'
                    aria-aria-describedby="meal-search-button"
                />
                <Button variant="danger" id="meal-search-button">
                    Button
                </Button>
            </InputGroup>
        </div>
    </div>
  )
}

export default ShowJumbotron