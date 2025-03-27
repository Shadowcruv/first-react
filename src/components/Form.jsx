 export default function Form(){

  //use htmlFor for react, use For for javascript
  //the click as value is to change the value on the input button from the default Submit to Click  <input type="submit" value="Click" />
  
  function signUp(formData){
    const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const favColor = formData.get("favColor")
    console.log(favColor);
    
  }


  return (
    <section>
      <h2 style={{display: "flex", justifyContent: "center"}}>SignUp Form</h2>
      <form action={signUp} >
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="e.g joe@gmail.com" defaultValue={"frank@gmail.com"} />
        <br />
        
        <label>
          Password:
          <input type="password" name="password" defaultValue={"egg"} />
        </label>
        <br />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" placeholder="type here"></textarea>
        <br />

        <fieldset>
          <legend>Employment Status</legend>
          <input id="unemployed" type="radio" name="employmentStatus" value="unemployed" defaultChecked={true}  />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input id="part-time" type="radio" name="employmentStatus" value="part-time" />
          <label htmlFor="part-time">Part-Time</label>
          <br />

          <label>
          <input id="full-time" type="radio" name="employmentStatus" value="full-time" />
          Full-Time
          </label>
          
          <br />
        </fieldset>        
        <br />

        <fieldset>
          <legend>Dietary Restrictions</legend>
          <label>
            <input type="checkbox" value="kosher" name="dietaryRestrictions"/>
            Kosher
          </label>

          <br />

          <input id="vegan" type="checkbox" name="dietaryRestrictions" value={"vegan"}  />
          <label htmlFor="vegan">Vegan</label>

          
          <br />

          <label>
            <input type="checkbox" value="glutton-free" name="dietaryRestrictions"/>
            Glutton-Free
          </label>

          <br />
        </fieldset>

        <label></label>
        <select id="favcolor" name="favColor">
          <option value="">--Choose a color--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="taligo">Taligo</option>
          <option value="violet">Violet</option>

        </select>

        <br />

        <input type="submit" value="Click" />
        
        
      </form>



    </section>
  )
 }