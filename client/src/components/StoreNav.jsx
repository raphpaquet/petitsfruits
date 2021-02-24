import './StoreNav.scss';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default function StoreNav(props) {
  // const [showIllustration, setShowIllustration] = useState(false);
  // const [showPaint, setShowPaint] = useState(false);
  // const [showSticker, setShowSticker] = useState(false);
  // const [showClothing, setShowClothing] = useState(false);
  // const [showAll, setShowAll] = useState(true)
  const {showPaint, setShowPaint, showSticker, setShowSticker, showClothing, setShowClothing, showIllustration, setShowIllustration, showAll, setShowAll} = props

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

     // Helps set the state when choosing a category
     const getCategory = (category) => {
      if (category == 'Peinture') {
        setShowPaint(true)
      } else if (category !== 'Peinture') {
        setShowPaint(false)
      }
      if (category == 'Illustration') {
        setShowIllustration(true)
      } else if (category !== 'Illustration') {
        setShowIllustration(false)
      }
      if (category == 'Sticker') {
        setShowSticker(true)
      } else if (category !== 'Sticker') {
        setShowSticker(false)
      }
      if (category == 'Clothing') {
        setShowClothing(true)
      } else if (category !== 'Clothing') {
        setShowClothing(false)
      }
      if (category == 'All') {
        setShowAll(true)
      } else if (category !== 'All') {
        setShowAll(false)
      }
    }

  return (
    <section id='storeNav'>
    <button onClick={openMenu} className='burger-btn'>
      &#9776;
    </button>
    <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
    <div className='page-title'>
      {/* <Link to="/store"><span className="name">| boutique</span></Link> */}
      <ShoppingCartIcon style={{color:'orange'}}/>
    </div>
    <aside className="sidebar">
        <h3>catégories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <div className="categories">
          <button className="category-btn" onClick={() => getCategory('Peinture'), closeMenu}>Peintures</button>
          <button className="category-btn" onClick={() => getCategory('Illustration'), closeMenu}>Illustrations</button>
          <button className="category-btn" onClick={() => getCategory('Sticker'), closeMenu}>Stickers</button>
          <button className="category-btn" onClick={() => getCategory('Clothing'), closeMenu}>T-Shirts</button>
          <button className="category-btn" onClick={() => getCategory('All'), closeMenu}>Tout</button>
        </div>
    </aside>
  </section>
  )
}