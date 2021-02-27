import About from "./About";
import Contact from "./Contact";
import Illustrations from "./Illustrations";
import Navigation from "./Navigation";
import './HomePage.scss'
import Newsletter from "./Newsletter";

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