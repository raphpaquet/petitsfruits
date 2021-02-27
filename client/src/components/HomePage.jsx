import About from "./About";
import Contact from "./Contact";
import Illustrations from "./Illustrations";
import Navigation from "./Navigation";
import './HomePage.scss'

export default function HomePage() {
  return (
    <section id="homepage">
      <div className="homepage-img" style={{ backgroundImage: "url('../images/skate.png')" }}></div>
      <div>
        <Navigation />
        <Illustrations />
        <Contact />
      </div>
    </section>
  )
}