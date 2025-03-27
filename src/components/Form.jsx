 export default function Form(){

  //use htmlFor for react, use For for javascript
  //the click as value is to change the value on the input button from the default Submit to Click  <input type="submit" value="Click" />
  
  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
  }


  return (
    <section>
      <h2 style={{display: "flex", justifyContent: "center"}}>SignUp Form</h2>
      <form onSubmit={handleSubmit} >
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="e.g joe@gmail.com" />
        <br />
        
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />

        
        <input type="submit" value="Click" />
        
        
      </form>



    </section>
  )
 }