import './Navigation.scss';
import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
  return (
    <section id="navbar">
      <img className="logo" src="/images/logo.png"></img>
      <div className="tab-button">
        <div className="tab-list">
          <HashLink to="#illustrations" className="action-btn">Illustrations</HashLink>
          <HashLink to="#about" className="action-btn">Petitsfruits qui?</HashLink>
          <HashLink to="#about" className="action-btn">Magasin</HashLink>
          <HashLink to="#contact" className="action-btn">Contact</HashLink>
        </div>
      </div>
    </section>
  )
}