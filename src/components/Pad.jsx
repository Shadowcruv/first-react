import React from 'react'

export default function Pad(props) {

  const [isOn, setIsOn] = React.useState(props.on)
  function toggleOff(){
      setIsOn(prevIsOn => {
        console.log(prevIsOn)
        return !prevIsOn
        }
      )
  }

  console.log(props.on)

  return (
    <button className={props.className} id={props.id} style={{
        backgroundColor: props.color,
        opacity: isOn ? 1 : 0.1
      }}

      onClick={toggleOff}
    >
    </button>
  )
}