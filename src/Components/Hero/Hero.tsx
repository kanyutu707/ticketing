import { GiPadlock } from 'react-icons/gi'
import './Hero.css'
const Hero = () => {
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
        <button>GET STARTED</button>
        </div>
    </div>
  )
}

export default Hero