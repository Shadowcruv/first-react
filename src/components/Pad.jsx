import React from 'react'

export default function Pad(props) {

  // console.log(props.method)

  let id = props.id
  function execute(){
    props.method(id)
  }
  

  // console.log(props.on)

  return (
    <button className={props.className} id={props.id} style={{
        backgroundColor: props.color,
        opacity: props.on ? 1 : 0.1
      }}

      onClick={execute}
    >
    </button>
  )
}