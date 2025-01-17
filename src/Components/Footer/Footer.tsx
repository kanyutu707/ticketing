import { BsInstagram, BsTwitter} from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { LiaLinkedin } from "react-icons/lia"
import { MdEmail } from "react-icons/md"
import { PiPhone } from "react-icons/pi"
import './Footer.css'

const Footer = () => {
  return (
    <div className="footercontainer">
        <section>
            <header>REACH OUT TO US</header>
            <span>
                <div className="icon">
                <BsTwitter/>
                <label htmlFor="">TWITTER</label>
                </div>
                <div className="icon">
                <FaFacebook/>
                <label htmlFor="">FACEBOOK</label>
                </div>
                <div className="icon">
                <LiaLinkedin/>
                <label htmlFor="">LINKEDIN</label>
                </div>
                <div className="icon">
                <BsInstagram/>
                <label htmlFor="">INSTAGRAM</label>
                </div>
                <div className="icon">
                <PiPhone/>
                <label htmlFor="">CALL US</label>
                </div>
                <div className="icon">
                <MdEmail/>
                <label htmlFor="">EMAIL</label>
                </div>
            </span>
          
        </section>
        <form action="">
                <header>FEEDBACK OR QUERIES</header>
                <div className="input_group">
                    <label htmlFor="">EMAIL</label>
                    <input type="email" placeholder="EMAIL" />
                </div>
                <div className="input_group">
                    <label htmlFor="">COMMENT</label>
                    <textarea name="" id=""></textarea>
                </div>
                <button>SUBMIT</button>
            </form>
    </div>
  )
}

export default Footer