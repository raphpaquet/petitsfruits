import './Store.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import './Store.scss';
import StoreNav from './StoreNav';
import './StoreNav.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';





export default function Store(props) {
  
  // const {showPaint, showSticker, showClothing, showIllustration, showAll} = props
   const [products, setProducts] = useState('');
   
   const [loadingProducts, setLoadingProducts] = useState(true);
   const [showIllustration, setShowIllustration] = useState(false);
   const [showPaint, setShowPaint] = useState(false);
   const [showSticker, setShowSticker] = useState(false);
   const [showClothing, setShowClothing] = useState(false);
   const [showAll, setShowAll] = useState(true)


   // Axios call to get the products
   useEffect(() => {
    axios.get(`/api/products`)
      .then(res => {
        setProducts(res.data)
        setLoadingProducts(false)
      })
      .catch(error => {
        console.log(error)
      });
  }, []);
  console.log(products)

    // Makes sure that the products do not load before the axios call. 
    if (loadingProducts) {
      return <section className="products">Loading...
      </section>
    } 

    // const products = [
    //   {
    //     id: '1',
    //     name: 'Slim Shirt',
    //     category: 'Shirts',
    //     image: '/images/alien_bagel.jpg',
    //     price: 60,
    //     description: ' Nike',
    //     rating: 4.5,
    //     numReviews: 10,
    //     countInStock: 6,
    //     category: 'illustration'
    //   },
    //   {
    //     id: '2',
    //     name: 'Slim Shirt',
    //     category: 'Shirts',
    //     image: '/images/alien_jarry.jpg',
    //     price: 60,
    //     description: ' Nike',
    //     rating: 4.5,
    //     numReviews: 10,
    //     countInStock: 6,
    //     category: 'paint'
    //   },{
    //     id: '2',
    //     name: 'Slim Shirt',
    //     category: 'Shirts',
    //     image: '/images/alien_stade.jpg',
    //     price: 60,
    //     description: ' Nike',
    //     rating: 4.5,
    //     numReviews: 10,
    //     countInStock: 6,
    //     category: 'sticker'
    //   },
    // ]
    
    // // sidebar open/close
    // const openMenu = () => {
    //   document.querySelector('.sidebar').classList.add('open');
    // };
    // const closeMenu = () => {
    //   document.querySelector('.sidebar').classList.remove('open');
    // };

    // Render ALL products
    const listProductsToBuy = () => products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <Link to={'/product/' + product.id}>
              <img
                className="product-image"
                src={product.image}
                alt="product-image"
              />
            </Link>
            <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <span className="product-price">{(product.price).toFixed(2)}$ |</span>
            <button className="ajout"><span>ajouter</span></button>
            </div>
        </li>
    ))

    // Render product by CATEGORIES
    const listCategoryProduct = (cat) => products.filter(product => product.category === cat).map((product) => (
        <li key={product.id}>
          <div className="product">
            <Link to={'/product/' + product.id}>
              <img
                className="product-image"
                src={product.image}
                alt="product-image"
              />
            </Link>
            <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-price">{(product.price).toFixed(2)}$</div>
            </div>
        </li>
    ))

    // // Helps set the state when choosing a category
    // const getCategory = (category) => {
    //   if (category == 'Peinture') {
    //     setShowPaint(true)
    //   } else if (category !== 'Peinture') {
    //     setShowPaint(false)
    //   }
    //   if (category == 'Illustration') {
    //     setShowIllustration(true)
    //   } else if (category !== 'Illustration') {
    //     setShowIllustration(false)
    //   }
    //   if (category == 'Sticker') {
    //     setShowSticker(true)
    //   } else if (category !== 'Sticker') {
    //     setShowSticker(false)
    //   }
    //   if (category == 'Clothing') {
    //     setShowClothing(true)
    //   } else if (category !== 'Clothing') {
    //     setShowClothing(false)
    //   }
    //   if (category == 'All') {
    //     setShowAll(true)
    //   } else if (category !== 'All') {
    //     setShowAll(false)
    //   }
    // }

      return (
        <section id='store'>
          <StoreNav 
          />
          {/* <section id='storeNav'>
            <button onClick={openMenu} className='burger-btn'>
              &#9776;
            </button>
            <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
            <div className='page-title'>
              <ShoppingCartIcon style={{color:'orange'}}/>
            </div>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
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
            </aside>
          </section> */}
          {/* <StoreNav /> */}
          {/* <div className="categories">
            <button className="category-btn" onClick={() => getCategory('Peinture')}>Peintures</button>
            <button className="category-btn" onClick={() => getCategory('Illustration')}>Illustrations</button>
            <button className="category-btn" onClick={() => getCategory('Sticker')}>Stickers</button>
            <button className="category-btn" onClick={() => getCategory('Clothing')}>T-Shirts</button>
            <button className="category-btn" onClick={() => getCategory('All')}>Tout</button>
          </div> */}
          {showPaint === true ? (
            <div className="paint">
              <section className="products">
                {listCategoryProduct('peinture')}
              </section>
            </div>
          ) : null}
          {showIllustration === true ? (
            <div className="illustrations">
              <section className='products'>
                {listCategoryProduct('illustration')}
              </section> 
            </div>
          ) : null}
          {showClothing === true ? (
            <div className="paint">
              <section className="products">
                {listCategoryProduct('clothing')}
              </section>
            </div>
          ) : null}
          {showSticker === true ? (
            <div className="stickers">
              <section className="products">
                {listCategoryProduct('sticker')}
              </section>
            </div>
          ) : null}
          {showAll === true ? (
            <div className="all">
              <section className="products">
                {listProductsToBuy()}
              </section>
            </div>
          ) : null}
      </section>
    );
  
}