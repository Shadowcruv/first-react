// export default function Header(){
//   return (
//     <header className='header'>
//       <img src="src/assets/react.svg" alt="React image" className='logo'/>
//       <nav>
//         <ul className='nav-list'>
//           <li className="nav-list-item">Pricng</li>
//           <li className="nav-list-item">About</li>
//           <li className="nav-list-item">Contact</li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

import reactImage from "../assets/react.svg"

export default function Header(){
  return (
    <header className="chef-claude">
      <img src={reactImage} className="chef-logo" />
      <span>Chef Claude</span>
    </header>
  )
}
