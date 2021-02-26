import './Navigation.scss';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'


export default function Navigation() {

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
              <HashLink to="#illustrations" className="category-btn" onClick={closeMenu}>Illustrations</HashLink>
            </li>
            <li>
              <HashLink to="#about" className="category-btn" onClick={closeMenu}>Petitsfruits</HashLink>
            </li>
            <li>
              <Link to="/store" className="category-btn" onClick={closeMenu}>Magasin</Link>
            </li>
            <li>
              <HashLink to="#contact" className="category-btn" onClick={closeMenu}>Contact</HashLink>
            </li>
           </ul>
      </aside>
    </section>
  )
}