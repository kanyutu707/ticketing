import { Route, Routes } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Navigation from "../../Components/Navigation/Navigation"
import Stats from "../../Components/Stats/Stats"
import AllTickets from "../../Pages/AllTickets/AllTickets"
import SolvedTickets from "../../Pages/SolvedTickets/SolvedTickets"
import UnsolvedTickets from "../../Pages/UnsolvedTickets/UnsolvedTickets"
import NeglectedTickets from "../../Pages/NeglectedTickets/NeglectedTickets"
import './User.css';
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"

const User = () => {
  return (
    <div className="usercontainer">
       
        <Navbar/>
        <Stats first="ALL" second="SOLVED" third="PENDING" fourth="REJECTED" number1={10} number2={20} number3={15} number4={16}/>
        <Navigation cartegory="TECHNICIAN"/>
        <Routes>
            <Route path='' element={<AllTickets ifUser="TECHNICIAN"/>}/>
            <Route path="/solved" element={<SolvedTickets/>}/>
            <Route path='/unsolved' element={<UnsolvedTickets/>}/>
            <Route path="/rejected" element={<NeglectedTickets/>}/>
        </Routes>
        <span className="move"><BiLeftArrow/>5/12<BiRightArrow/></span>
    </div>
  )
}

export default User