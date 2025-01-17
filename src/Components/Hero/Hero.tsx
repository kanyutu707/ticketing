import { GiPadlock } from 'react-icons/gi';
import './Hero.css';
import { useState } from 'react';

const Hero = () => {
    const [newEmail, setNewEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    async function handleSubmit(e:any) {
        e.preventDefault();
        const email = newEmail.trim();
        
        if (!email) {
            return;
        }

        setIsLoading(true);
        setError("");
        
        try {
            const response = await fetch(`${apiUrl}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-SILO-KEY': apiKey
                },
                body: JSON.stringify({
                    email: email
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Success:", data);
            setSuccess(true);
            setNewEmail("");
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to join waitlist");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="herocontainer">
            <nav>
                <span>TICKETING SYSTEM</span>
                <GiPadlock title='GET STARTED' />
            </nav>
            <div className='content'>
                <section>
                    TIMET is an online e-ticketing system that helps businesses manage their tickets more efficiently. With TIMET, you can create tickets, view existing ones, and track their status.
                </section>
                <span>
                    TIMET, A TIMELESS TICKET
                </span>
                <form className='waitlist' onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        value={newEmail} 
                        onChange={e => setNewEmail(e.target.value)}
                        disabled={isLoading}
                    />
                    <button disabled={isLoading}>
                        {isLoading ? "JOINING..." : "JOIN THE WAIT LIST"}
                    </button>
                    {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                    {success && <div style={{ color: 'green', marginTop: '10px' }}>Successfully joined!</div>}
                </form>
            </div>
        </div>
    );
  
  }

export default Hero;