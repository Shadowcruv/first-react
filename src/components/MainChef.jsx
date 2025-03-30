import React from "react"
import reactImage from "../assets/react.svg"


export default function MainChef(){

  const [ingredientList, setIngredientList] = React.useState([])

  function toggleFavourite(){

    setContact((prevContact) => {
      return {...prevContact, 
                isFavorite: !prevContact.isFavorite
            }
    })
  }


  function handleSubmit(formData){
    const newIngredient = formData.get("ingredient");

    setIngredientList(prevList => [...prevList, newIngredient])

    console.log(newIngredient);
  }

  const ingredientsElement = ingredientList.map(ingredient => <li key={ingredient}>{ingredient}</li>)
 
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
      {ingredientsElement.length > 0 && <section>
        <h2>Ingredients on hand</h2>
        <ul>
          {ingredientsElement}
        </ul>
        {ingredientsElement.length > 4 && <section className="recipe-box"> 
          <div className="recipe">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
            <button className="recipe-button"> Get a recipe</button>
        </section>}
      </section>}
    </>
  )
}