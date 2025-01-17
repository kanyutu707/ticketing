import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "./Layouts/Admin/Admin"
import User from "./Layouts/User/User"
import Index from './Pages/Index/Index'
const App = () => {
  return (
    <div className="appcontainer">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Index/>}/>
          <Route path="/admin/*" element={<Admin/>}/>
          <Route path="/user/*" element={<User/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App