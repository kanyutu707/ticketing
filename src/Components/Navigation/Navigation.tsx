import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({cartegory}:{cartegory:string}) => {
  return (
    <div className='navigationcontainer'>
      {cartegory==='TECHNICIAN'?(
        <>
          <Link to="/user/">ALL TICKETS</Link>
      <Link to="/user/solved">SOLVED TICKETS</Link>
      <Link to="/user/unsolved">UNSOLVED TICKET</Link>
      <Link to="/user/rejected">REJECTED TICKETS</Link>
        </>
      ):(
        <>
          <Link to="/admin/">ALL EMPLOYEES</Link>
      <Link to="/admin/solved">SOLVED TICKETS</Link>
      <Link to="/admin/unsolved">UNSOLVED TICKET</Link>
      <Link to="/admin/rejected">REJECTED TICKETS</Link>
        </>
      )}
      
    </div>
  )
}

export default Navigation