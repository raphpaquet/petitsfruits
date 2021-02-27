import Contact from "./Contact";
import Navigation from "./Navigation";
import Newsletter from "./Newsletter";
import './Tattoo.scss';

export default function Tattoo() {
  return (
    <div id="tattoo">
      <Navigation />
      <Newsletter />
      <Contact />
    </div>
  )
}