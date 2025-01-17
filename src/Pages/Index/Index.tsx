import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Offer from '../../Components/Offer/Offer'
import './Index.css'
const Index = () => {
  return (
    <div className='indexcontainer'>
        <Hero/>
        <Offer/>
        <Footer/>
    </div>
  )
}

export default Index