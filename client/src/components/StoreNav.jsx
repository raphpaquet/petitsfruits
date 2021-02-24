import { useState } from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom'


export default function StoreNav(props) {

  const history = useHistory()
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
        console.log('PAINT')
        console.log(showPaint)
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
        console.log('STICKERS')
        console.log(showSticker)
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
    {/* <button onClick={openMenu} className='burger-btn'>
      &#9776;
    </button> */}
    <button onClick={() => history.goBack()} className="back">Back</button>
    <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
    <div className='page-title'>
      {/* <Link to="/store"><span className="name">| boutique</span></Link> */}
      <ShoppingCartIcon className="cart-icon" />
    </div>
    {/* <aside className="sidebar">
        <h3>catégories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <div className="categories">
          <button className="category-btn" onClick={() => getCategory('Peinture')}>Peintures</button>
          <button className="category-btn" onClick={() => getCategory('Illustration')}>Illustrations</button>
          <button className="category-btn" onClick={() => getCategory('Sticker')}>Stickers</button>
          <button className="category-btn" onClick={() => getCategory('Clothing')}>T-Shirts</button>
          <button className="category-btn" onClick={() => getCategory('All')}>Tout</button>
        </div>
    </aside> */}
  </section>
  )
}