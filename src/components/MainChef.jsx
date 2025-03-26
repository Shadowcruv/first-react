import React from "react"


export default function MainChef(){

  const [isGoingOut, setIsGoingOut] = React.useState(true)

  
  function handleClick(){
    setIsGoingOut(() => {
      if(isGoingOut){
        return false
      } else{
        return true
      }
    })
  }

  const ingredients = ["Pepper", "Salt", "Maggi"]

  const ingredientsElement = ingredients.map((element) => 
    <li key={element}>{element}</li>
  )

  //you can use this if you wanted to include return statement explicitly

  // ingredientsElement = fruits.map((element) => {
  //     return  <li>{element}</li>
  //   }
  // )

  function handleSubmit(event){
    //to preventing reloading of the page when the button in the form is clicked
    event.preventDefault()
    //to get the text in the input box in the form
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    console.log(newIngredient);
  }
 
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
        <button className="testButton" onClick={handleClick}>{isGoingOut ? "YES" : "NO"}</button>
        <ul>
          {/* {ingredientsElement} */}
        </ul>
      </section>
    </>
  )
}