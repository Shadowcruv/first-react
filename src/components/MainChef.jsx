import React from "react"
import reactImage from "../assets/react.svg"


export default function MainChef(){

  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    isFavorite: false
  })

  function toggleFavourite(){

    setContact((prevContact) => {
      return {...prevContact, 
                isFavorite: !prevContact.isFavorite
            }
    })
  }


  function handleSubmit(event){
    //to preventing reloading of the page when the button in the form is clicked
    event.preventDefault()
    //to get the text in the input box in the form
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredientList(prevList => [...prevList, newIngredient])

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
        <header className="chef-claude">
              <img src={reactImage} className="chef-logo" 
              alt="present icon"/>
              <span>{contact.firstName} {contact.lastName}</span>
        </header>
        <button className="favoriteButton" onClick={toggleFavourite} aria-pressed={contact.isFavorite}
                aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"} >

        <img src={contact.isFavorite ? reactImage : null} className="chef-logo" 
                alt={contact.isFavorite ? "filled star icon" : "empty star icon"}/>
                
        </button>
        <ul>
          {/* {ingredientsElement} */}
        </ul>
      </section>
    </>
  )
}