// using props, n.b: it could be called any name of your choice but most people name it props

export default function Entry(props){
  console.log(props.img.src)
  return(
    <div className="main-content">
      <div className="mainContent-image-container">
        <img src={props.img} className="mainContent-image" alt="Sky"/>
      </div>
      <div >
        <div className="upper-content">
          <img src='src/assets/react.svg' className="content-subImage" alt="react"/>
          <h6>{props.city}</h6>
          <a href="www.app.com">View on Google Maps</a>
        </div>
        <h1 className="Mount-Fuji">{props.title}</h1>
        <p className="date">{props.date}</p>
        <p className="mount-text">{props.description}</p>
      </div>
  </div>
  );
  
}



//second is using destructing method. we destructured props

// export default function Entry({img, city, title, date, description}){
//   return(
//     <div className="main-content">
//       <div className="mainContent-image-container">
//         <img src={img} className="mainContent-image" alt="Sky"/>
//       </div>
//       <div >
//         <div className="upper-content">
//           <img src='src/assets/react.svg' className="content-subImage" alt="react"/>
//           <h6>{city}</h6>
//           <a href="www.app.com">View on Google Maps</a>
//         </div>
//         <h1 className="Mount-Fuji">{title}</h1>
//         <p className="date">{date}</p>
//         <p className="mount-text">{description}</p>
//       </div>
//   </div>
//   );
  
// }