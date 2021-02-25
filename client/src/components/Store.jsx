import './Store.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions'
import { useEffect, useState } from 'react';
import './Store.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';





export default function Store(props) {

   //const [products, setProducts] = useState('');
   const productList = useSelector(state => state.productList);
   const { products, loading, error } = productList;
   
   const [loadingProducts, setLoadingProducts] = useState(true);
   const [showIllustration, setShowIllustration] = useState(false);
   const [showPaint, setShowPaint] = useState(false);
   const [showSticker, setShowSticker] = useState(false);
   const [showClothing, setShowClothing] = useState(false);
   const [showAll, setShowAll] = useState(true)
   
   
   
   // Axios call to get the products
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(listProducts())

     return () => {
      };
  }, []);
  console.log(productList)

    // // Makes sure that the products do not load before the axios call. 
    // if (loadingProducts) {
    //   return <section className="products">Loading...
    //   </section>
    // } 
    
    // sidebar open/close
    const openMenu = () => {
      document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
      document.querySelector('.sidebar').classList.remove('open');
    };

    // Render ALL products
    const listProductsToBuy = () => products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <div className='product-img'>
              <Link to={'/product/' + product.id}>
                <img
                  className="product-image"
                  src={product.image}
                  alt="product-image"
                />
              </Link>
            </div>
            <div className='product-footer'>
              <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <span className="product-price">{(product.price).toFixed(2)}$ |</span>
              <button className="ajout"><span>ajouter</span></button>
            </div>
          </div>
        </li>
    ))

    // Render product by CATEGORIES
    const listCategoryProduct = (cat) => products.filter(product => product.category === cat).map((product) => (
      <li key={product.id}>
        <div className="product">
          <div className='product-img'>
            <Link to={'/product/' + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product-image"
              />
            </Link>
          </div>
          <div className='product-footer'>
            <div className="product-name">
              <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <span className="product-price">{(product.price).toFixed(2)}$ |</span>
            <button className="ajout"><span>ajouter</span></button>
          </div>
        </div>
      </li>
    ))

    // Helps set the state when choosing a category
    const getCategory = (category) => {
      if (category == 'Peinture') {
        setShowPaint(true)
        closeMenu()
        console.log(showPaint)
      } else if (category !== 'Peinture') {
        setShowPaint(false)
      }
      if (category == 'Illustration') {
        setShowIllustration(true)
        closeMenu()
      } else if (category !== 'Illustration') {
        setShowIllustration(false)
      }
      if (category == 'Sticker') {
        setShowSticker(true)
        closeMenu()
      } else if (category !== 'Sticker') {
        setShowSticker(false)
      }
      if (category == 'Clothing') {
        setShowClothing(true)
        closeMenu()
      } else if (category !== 'Clothing') {
        setShowClothing(false)
      }
      if (category == 'All') {
        setShowAll(true)
        closeMenu()
      } else if (category !== 'All') {
        setShowAll(false)
      }
    }

      return (
        <section id='store'>
          <section id='storeNav'>
            <button onClick={openMenu} className='burger-btn'>
              &#9776;
            </button>
            <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
            <div className='cart'>
              <ShoppingCartIcon className="cart-icon"/>
            </div>
          </section>
            <aside className="sidebar">
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
            </aside>
                {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <ul className="products">
                {products.map((product) => (
                   <li key={product.id}>
                   <div className="product">
                     <div className='product-img'>
                       <Link to={'/product/' + product._id}>
                         <img
                           className="product-image"
                           src={product.image}
                           alt="product-image"
                         />
                       </Link>
                     </div>
                     <div className='product-footer'>
                       <div className="product-name">
                         <Link to={'/product/' + product._id}>{product.name}</Link>
                       </div>
                       <span className="product-price">{(product.price).toFixed(2)}$ |</span>
                       <button className="ajout"><span>ajouter</span></button>
                     </div>
                   </div>
                 </li>
                ))}
              </ul>
            )}
          </section>
        )
         
      }