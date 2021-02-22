import './Illustrations.scss';

import { HashLink } from 'react-router-hash-link';

export default function Illustrations() {
  return (
    <section id='illustrations'>
      <HashLink to="#navbar"><img className="logo" src="./images/logo.png"></img></HashLink>
      <ul>
        <li>
          <img className="img-illustration" src="./images/alien_bagel.jpg"></img>
        </li>
        <li>
          <img className="img-illustration" src="./images/alien_habitat.jpg"></img>
        </li>
        <li>
          <img className="img-illustration" src="./images/alien_jarry.jpg"></img>
        </li>
        <li>
          <img className="img-illustration" src="./images/alien_metro.jpg"></img>
        </li>
        <li>
          <img className="img-illustration" src="./images/alien_orange.jpg"></img>
        </li>
        <li>
          <img className="img-illustration" src="./images/alien_skate.jpg"></img>
        </li>
      </ul>
    </section>
  )
}