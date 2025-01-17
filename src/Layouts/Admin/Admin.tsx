import { Route, Routes } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Navigation from "../../Components/Navigation/Navigation"
import Stats from "../../Components/Stats/Stats"
import SolvedTickets from "../../Pages/SolvedTickets/SolvedTickets"
import UnsolvedTickets from "../../Pages/UnsolvedTickets/UnsolvedTickets"
import NeglectedTickets from "../../Pages/NeglectedTickets/NeglectedTickets"
import './Admin.css'
import Employees from "../../Pages/Employees/Employees"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"

const Admin = () => {
  return (
    <div className="admincontainer">
         <Navbar/>
        <Stats first="EMPLOYEES" second="SOLVED TICKETS" third="PENDING TICKETS" fourth="REJECTED TICKETS" number1={30} number2={20} number3={15} number4={16}/>
        <Navigation cartegory="ADMIN"/>
        <Routes>
        <Route path="" element={<Employees/>}/>
        <Route path="/solved" element={<SolvedTickets/>}/>
            <Route path='/unsolved' element={<UnsolvedTickets/>}/>
            <Route path="/rejected" element={<NeglectedTickets/>}/>
        </Routes>
        <span className="move"><BiLeftArrowAlt/>5/12<BiRightArrowAlt/></span>
    </div>
  )
}

export default Admin