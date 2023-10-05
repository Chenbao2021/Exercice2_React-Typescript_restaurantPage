import Head from '../components/Head'
import { contactImage } from '../assets/assetsMain'
import './contact.css'

function Contact() {
  return (
    <div>
        <Head />
        <div className="contact">
          <div className="contact-head">
            <h1>Contact</h1>
          </div>
          <div className="contact-informations">
            <div className="contact-information-text">
              <p><b>SUSHI VILLAGE</b></p>
              <br/>
              <p>20 avenues des Avengers</p>
              <p>75041 Paris</p>
              <br/>
              <p>Tél: +33658630100</p>
              <p>Siret: 828 011 636 00017</p>
              <br/>
              <p>Restaurantion traditionnelle(5610A)</p>
              <br/>
              <p>Au capital 8000€</p>
            </div>
            <div className="contact-information-image">
              <img src={contactImage} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact