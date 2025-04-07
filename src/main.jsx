import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//below are the 3 different ways i know you can import something from an export default function in React
// import Header from './Header.jsx'
import Big from './MainContent'
import Bottom from './Footer.jsx'
import './index.css'
import App from './App.jsx'
// import Appr from './Appr.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// const root = createRoot(document.getElementById('root'));
// root.render
// (<ul>
//   <li>Superh hh h Popular</li>
//   <li>Has a good logo</li>
//   <li>react has a pretty</li>
// </ul>
// )

// //Using jsx
// const root = createRoot(document.getElementById('root'))

// const reactElement = <h1>The small Rice</h1>
// console.log(reactElement)
// root.render(reactElement)

//we create a component that can be reused in places

// function MainContent(){
//   return (<h1>React is great!</h1>)
// }

// root.render(<div>
//   <MainContent />
// </div>)


// const h1 = document.createElement("h1");
// h1.textContent = "This is imperative Coding";
// h1.className = "header";
// document.getElementById("root").appendChild(h1);

// const root = createRoot(document.getElementById('root'));

// root.render(
//  <main>
//     <img src="src/assets/react.svg"/>
//     <h1>Fun facts about React!</h1>
//     <ul>
//       <li>Was first release in 2013</li>
//       <li>Was originally created by Jordan Walker</li>
//       <li>Has well over 200k stars on Github</li>
//       <li>Is maintained by Meta</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>

//  </main>
// )


const root = createRoot(document.querySelector("#root"));

root.render(
  
  // <Page />
  <App/>
  
)


function Page(){

  const hours = new Date().getHours();
  let timeOfDay;
  if(timeOfDay < 12){
    timeOfDay = "morning"
  } else {
    timeOfDay = "night"
  }

  return (
    <>
      {/* <Header />
      <Big />
      <Bottom /> */}
      <h1>Good {timeOfDay}</h1>
    
    </>
  )
}


