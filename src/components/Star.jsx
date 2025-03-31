 import starEmpty from '../image/star-empty.png'
 import starFilled from '../image/star-filled.png'


export default function Star(props){

  return (
    <button onClick={props.onClick} className='rating-button'>
          <img
            src={props.isFavorite ? starFilled : starEmpty}
            alt={props.isFavorite ? "starFilled" : "starEmpty"} 
          />
    </button>
  )

}