import React from "react"
import reactImage from "../assets/react.svg"
import ListIngredient from "./ListIngredient";
import AIResponse from "./AIResponse";
import getRecipeFromMistral from "../ai"


export default function MainChef(){

  const [ingredientList, setIngredientList] = React.useState([])

  const [theResponse, setTheResponse] = React.useState("");

  function toggleFavourite(){

    setContact((prevContact) => {
      return {...prevContact, 
                isFavorite: !prevContact.isFavorite
            }
    })
  }

  const key = ""

  function handleSubmit(formData){
    const newIngredient = formData.get("ingredient");

    setIngredientList(prevList => [...prevList, newIngredient])

    console.log(newIngredient);
    
  }

  const ingredientsElement = ingredientList.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  function getRecipe(){
    const response = getRecipeFromMistral(ingredientList);
    console.log(response)
    setTheResponse(response);
  }
 
  return (
    <>
      <section>
        <form className="add-ingredient-form" action={handleSubmit}>
          <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
            
          />
          <button>Add ingredient</button>
        </form>
      </section>
      <ListIngredient length={ingredientList.length} list={ingredientsElement} getRecipe={getRecipe} />
      <AIResponse theResponse={theResponse}/>
        
    </>
  )
}