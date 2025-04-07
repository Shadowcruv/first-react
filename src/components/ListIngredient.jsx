export default function ListIngredient({length, list, getRecipe}){

  return (
    length > 0 && <section>
      <h2>Ingredients on hand</h2>
      <ul>
         {list}
      </ul>
      {length > 4 && <section className="recipe-box"> 
        <div className="recipe">
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
          <button onClick={getRecipe} className="recipe-button"> Get a recipe</button>
      </section>}
    </section>
  )
}