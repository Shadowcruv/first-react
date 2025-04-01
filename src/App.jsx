import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Ideal } from './components/Ideal'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Entry from './components/Entry'
import Joke from './components/Joke'
import jokes from './jokesData'
import data from './data'
import MainChef from './components/MainChef'
import Form from './components/Form'
import Chat from './components/Chat'
import pads from './pads'
import Pad from './components/Pad'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// export default function App(){
//   return (
//     <>
//       <Ideal />
//       <Navbar />
//     </>
//   )
// }

//for travel journal(Entry.jsx)
export default function App({darkMode}){

  function handleClick(){
    console.log("I was clicked")
  }
  
  // const entryComponentList = [
  //   <Entry
  //       img={
  //           {
  //             src:"src/image/sky.webp",
  //             alt:"Sky Cloud"
  //           }
  //         }
  //       city="Japan"
  //       title="Mount Fuji"
  //       date="12 Jan 2021-24 Jan, 2021"
  //       description="Mount Fuji is the tallest mountain in Japan,standing at 3,776 meters (12,389 feet). Mount Fuji..."
        
  //     />,
  //     <Entry 
  //       img={
  //         {
  //           src:"src/image/sky.webp",
  //           alt:"Sky Cloud"
  //         }
  //       }
  //       city="Japan"
  //       title="Mount Everest"
  //       date="14 Feb 2021-24 Jan, 2021"
  //       description="Mount Everest is the tallest mountain in Japan,standing at 3,776 meters (12,389 feet). Mount Fuji..."
  //     />,
  //     <Entry
  //       img={
  //         {
  //           src:"src/image/sky.webp",
  //           alt:"Sky Cloud"
  //         }
  //       }
  //       city="Japan"
  //       title="Mount Island"
  //       date="12 Jan 2021-24 Jan, 2021"
  //       description="Mount Fuji is the tallest mountain in Japan,standing at 3,776 meters (12,389 feet). Mount Fuji..."
  //     />,
  //     <Entry 
  //       img={
  //         {
  //           src:"src/image/sky.webp",
  //           alt:"Sky Cloud"
  //         }
  //       }
  //       city="Japan"
  //       title="Mount Jordan"
  //       date="12 Jan 2021-24 Jan, 2021"
  //       description="Mount Fuji is the tallest mountain in Japan,standing at 3,776 meters (12,389 feet). Mount Fuji..."
  //     />
  // ]

  const entryDataComponentList = data.map((travelObject) => {
    
    //now let's use spread operator which is optimizable too as react will create each property of the object for us before rendering instead of us creating it. {...travelObject}
    return <Entry 
              {...travelObject}
            />
  })

  const jokesComponentList = jokes.map((joke) => (
    <Joke 
      setup={joke.setup}
      punchline={joke.punchline}
    />
  ))

  const [unreadMessages, setUnreadMessages] = useState([])

  const n = unreadMessages.length

  const [padList, setPadList] = useState(pads)



  const styles = {
    backgroundColor: darkMode ? "#222222" : "#ffffff",
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr  1fr",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "2px",
    justifyItems: "center",
    alignItems: "center"
  }

  const padElementList = padList.map(pad => {
    // console.log(pad.on);
    return <Pad className= {pad.on ? "disco-button-on": "disco-button-off"} id={pad.id} key={pad.id} color={pad.color} on={pad.on} method={toggle} />

  }
  )

  
  const design = {backgroundColor: "red"}
 
  function toggleAll(){
    setPadList(prevPadList => prevPadList.map(item => ({...item, on: false})))
  }

  function toggle(id){

    setPadList(prevPadList => prevPadList.map(item => item.id === id ? {...item, on: !item.on} : item))
  }

  // console.log(padList)

  return (
    <div style={styles}>
      {padElementList}
      <button onClick={toggleAll} style={design}>Switch Off</button>
      {/* <Header /> */}
      {/* <Chat count={n}/> */}
      {/* <Form /> */}
      {/* {jokesComponentList} */}
      {/* <MainChef /> */}
    </div>
    
  )
}

//for Jokes and Punchline
// function App(){
//   return (
//     <>
//       <Joke
//         setup
//         punchline="Yes that's true that it is sweet and very sweet man"
//       />
//       <Joke 
//         setup="Orange is sweet"
//         punchline="The man is too humble for the president"
//       />
//       <Joke 
//         setup="Avacado is alright"
//         punchline="Okay how is this country fairing now"
//       />
//       <Joke 
//         setup="Pineapple is sweet"
//         punchline="Yes that's true that it is sweet and very sweet man"
//       />
//     </>
//   )
// }

// export default App;