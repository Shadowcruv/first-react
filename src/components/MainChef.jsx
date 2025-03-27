import React from "react"


export default function MainChef(){


  const [ingredientList, setIngredientList] = React.useState([])

  const [count, setCount] = React.useState(0)


  const ingredients = ["Pepper", "CrayFish", "Maggi"]
  

  const ingredientsElement = ingredientList.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  //you can use this if you wanted to include return statement explicitly

  // ingredientsElement = fruits.map((element) => {
  //     return  <li>{element}</li>
  //   }
  // )

  function handleSubmit(event){
    event.preventDefault()
    setCount(count => {

      setIngredientList( prevList => {
        console.log(count)
        return [...prevList, ingredients[count]]
      })
      
      
      return count + 1

    
    })
    
  }

  // function handleSubmit(event){
  //   //to preventing reloading of the page when the button in the form is clicked
  //   event.preventDefault()
  //   //to get the text in the input box in the form
  //   const formData = new FormData(event.currentTarget);
  //   const newIngredient = formData.get("ingredient");

  //   setIngredientList(prevList => [...prevList, newIngredient])

  //   console.log(newIngredient);
  // }
 
  return (
    <>
      <section>
        <form className="add-ingredient-form" onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
            
          />
          <button>Add ingredient</button>
        </form>
        
        <ul>
          {ingredientsElement}
        </ul>
      </section>
    </>
  )
}