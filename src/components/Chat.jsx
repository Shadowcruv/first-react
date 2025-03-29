export default function Chat(props){

  

  return (
      props.count > 0 ? <h1>You have {props.count} unread messages</h1> : <h1>You have no unread messages</h1>
      
  )
}