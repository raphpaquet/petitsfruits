import './Navigation.scss';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <section id="navbar">
      
      <div className='page-title'>
        <img className="logo" src="/images/logo.png"></img>
        <span className="name">| petitsfruits</span>
      </div>
      {/* <div className="image-skate">
        <img className="skate" src="./images/skate.png"></img>
      </div> */}
      <div className="tab-button">
        <div className="tab-list">
          <HashLink to="#illustrations" className="action-btn">Illustrations</HashLink>
          <HashLink to="#about" className="action-btn">Petitsfruits</HashLink>
          <Link to="/store" className="action-btn">Magasin</Link>
          <HashLink to="#contact" className="action-btn">Contact</HashLink>
        </div>
      </div>
    </section>
  )
}