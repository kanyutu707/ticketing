import { GiPadlock } from 'react-icons/gi'
import './Hero.css'
import { useState } from 'react'
const Hero = () => {
  const [jsonData, setJsonData]=useState([]);
  const [newEmail, setNewEmail]=useState("");
  function handleSubmit(e:any){
    e.preventDefault();
    const email=newEmail.trim();
    if (email){
      fetch("https://api.jsonbin.io/v3/waitlist", {
        method:"POST",
        body:JSON.stringify({
          email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
      })
    }
   
  }
  return (
    <div className="herocontainer">
        <nav>
            <span>TICKETING SYSTEM</span>
            <GiPadlock title='GET STARTED'/>
        </nav>
        <div className='content'> 
        <section >
        TIMET is an online e-ticketing system that helps businesses manage their tickets more efficiently. With TIMET, you can create tickets, view existing ones, and track their status.
        </section>
        <span>
            TIMET, A TIMELESS TICKET
        </span>
        <form className='waitlist' onSubmit={handleSubmit}>
          <input type="email"  value={newEmail} onChange={e=>setNewEmail(e.target.value)}/>
          <button>JOIN THE WAIT LIST</button>
          </form>
        </div>
    </div>
  )
}

export default Hero