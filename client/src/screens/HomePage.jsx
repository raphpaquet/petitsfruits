
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import './HomePage.scss'
import Newsletter from "../components/Newsletter";

export default function HomePage() {



  return (
    <section id="homepage">
        <Navigation />
      <div >
        <img className="homepage-img" src="./images/skate.png" />
      </div>
        <Newsletter />
      <div>
        <Contact />
      </div>
    </section>
  )
}