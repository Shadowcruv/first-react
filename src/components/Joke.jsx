import React from "react"

export default function Joke(props){

  const [isShown, setIsShown] = React.useState(true)
  
  function handleClick(){
    setIsShown( prevIsShown => !prevIsShown )
  }

  return (
    // <>
    //   <p className="setup">Setup: {props.setup}</p>
    //   <p className="punchLine">
    //     Punchline: {props.punchline}</p>
    //   <hr />
    // </>

    //using tri
    // <>
    //   {props.setup ? <p className="setup">Setup: {props.setup}</p> : ""}
    //   <p className="punchLine">
    //     Punchline: {props.punchline}</p>
    //   <hr />
    // </>

    //using truthy value
    // <>
    //   {props.setup && <p className="setup">Setup: {props.setup}</p>}
    //   <p className="punchLine">
    //     Punchline: {props.punchline}</p>
    //   <hr />
    // </>

    //using javascript in css styles
    <>
      <p style={{ display: props.setup ? "block" : "none"}} className="setup">Setup: {props.setup}</p>
      {isShown && <p className="punchLine">
        Punchline: {props.punchline}</p>}
      {!isShown && <button onClick={handleClick}>Show PunchLine</button>}
      {isShown && <button onClick={handleClick}>Hide PunchLine</button>}
      <hr />
    </>
    
  )
}