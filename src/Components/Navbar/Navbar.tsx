import { BiMessage } from 'react-icons/bi'
import './Navbar.css'
import { BsPerson } from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className="navbarcontainer">
      <h2>TICKETING  SYSTEM</h2>
      <section>
          <input type="search" name="" id="" />
         
          <BiMessage title='messages'/>
          <BsPerson title='account'/>
      </section>
    </div>
  )
}

export default Navbar