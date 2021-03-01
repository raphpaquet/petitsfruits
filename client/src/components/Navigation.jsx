import './Navigation.scss';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Navigation(props) {

     // sidebar open/close
    const openMenu = () => {
      document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
      document.querySelector('.sidebar').classList.remove('open');
    };

  return (
   <section id="navbar">
      <button onClick={openMenu} className='burger-btn'>
         &#9776;
      </button>
      <div className='petitsfruits'>
        <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
        <span>PETITSFRUITS</span>
      </div>
      <div className='cart'>
        <Link to="/store" className="cart-icon">SHOP</Link>
      </div>
      <aside className="sidebar">
         <button className="sidebar-close-button" onClick={closeMenu}>
            x
         </button>
           <ul className="categories">
             <li>
                <img className="logo-blanc" src="/images/logo_blanc.png"></img>
             </li>
            <li>
              <Link to="/store" className="category-btn" onClick={closeMenu}>Boutique</Link>
            </li>
            <li>
              <Link to="/illustrations" className="category-btn" onClick={closeMenu}>Illustrations</Link>
            </li>
            <li>
              <Link to="/portfolioacademique" className="category-btn" onClick={closeMenu}>Portfolio Académique</Link>
            </li>
            <li>
              <Link to="/tattoo" className="category-btn" onClick={closeMenu}>Tattoo</Link>
            </li>
            <li>
              <HashLink to="#contact" className="category-btn" onClick={closeMenu}>Contact</HashLink>
            </li>
           </ul>
      </aside>
    </section>
  )
}