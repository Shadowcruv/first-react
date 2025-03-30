export default function Chat(props){

  let text;
  if(props.count > 0){
    	text = `You have ${props.count} unread messages`
  } else{
    text = "You are all caught up"
  }

  return (
      props.count > 0 ? <h1>{text}</h1> : <h1>{text}</h1>
      
  )
}