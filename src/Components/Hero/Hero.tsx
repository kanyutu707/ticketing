import { GiPadlock } from 'react-icons/gi'
import './Hero.css'
import { useState } from 'react'
const Hero = () => {

  const [newEmail, setNewEmail]=useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

console.log("API Key:", apiKey);
console.log("API URL:", apiUrl);
  function handleSubmit(e:any){
    e.preventDefault();
    const email=newEmail.trim();
    if (email){
      fetch(`${apiUrl}/waitlist`, {
        method:"POST",
       headers:{
        'Content-Type': 'application/json',
        'X-Master-key': `${apiKey}`,
       },
        body:JSON.stringify({
          email,
        }),
       
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