import { 
    Form,
    Button,
    Container 
} from 'react-bootstrap'

const RecipeForm = (props) => {
    const { recipe, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3
            style={
                    {
                        // backgroundColor: 'red',
                        textAlign: 'center',
                        fontWeight: 'weightOfFont',
                        marginTop: '25px',
                        color: 'rgb(56, 55, 55)'
                    }
                }
            >
                {heading}
            </h3>
            <Form onSubmit={handleSubmit}
            style={
                    {
                        
                        color: '#cc0052'
                    }
                }
            >
                <Form.Label htmlFor="recipeCreater">Recipe Creater Name</Form.Label>
                <Form.Control
                    placeholder="What is your name"
                    name="recipeCreater"
                    id="recipeCreater"
                    value={ recipe.recipeCreater}
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="recipeName">recipe Name</Form.Label>
                <Form.Control
                    placeholder="enter your recipe name here"
                    name="recipeName"
                    id="recipeName"
                    value={ recipe.recipeName}
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="recipeName">recipe Type</Form.Label>
                <Form.Control
                    placeholder="enter your recipe type"
                    name="recipeType"
                    id="recipeType"
                    value={ recipe.recipType}
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="type">Image</Form.Label>
                <Form.Control
                    placeholder="Image URL"
                    name="image"
                    id="image"
                    value={recipe.image}
                    onChange={handleChange}
                />
                <Form.Label htmlFor="Ingredient">Ingredient</Form.Label>
                <Form.Control
                    placeholder="enter your Ingredient here"
                    name="Ingredient"
                    id="Ingredient"
                    value={ recipe.Ingredient }
                    onChange={ handleChange }
                />
                <Button 
                type="submit"
                style={
                    {
                        backgroundColor: 'rgb(255, 255, 255)',
                        border: '2px solid 	#D0D0D0',
                        textAlign:'center',
                        marginTop: '30px',
                        color: 'rgb(56, 55, 55)',
                        width: '150px',
                    }
                }
                >Submit</Button>
            </Form>
        </Container>
    )
}

export default RecipeForm