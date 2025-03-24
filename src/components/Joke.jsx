export default function Joke(props){
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
      <p className="punchLine">
        Punchline: {props.punchline}</p>
      <hr />
    </>
    
  )
}