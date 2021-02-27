import './Store.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, listProducts } from '../actions/productActions'
import { useEffect, useState } from 'react';
import './Store.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../components/Navigation.scss';



export default function Store(props) {


   const productList = useSelector(state => state.productList);
   const { products, loading, error } = productList;
   const category = props.match.params.id ? props.match.params.id : '';
   


   // Axios call to get the products
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(listProducts(category))

     return () => {
       //
      };
  }, [category]);
  console.log(productList)
  console.log(category)
    


    // sidebar open/close
    const openMenu = () => {
      document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
      document.querySelector('.sidebar').classList.remove('open');
    };


      return (
        <section id='store'>
          <section id='navbar'>
            <button onClick={openMenu} className='burger-btn'>
              &#9776;
            </button>
            <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
            <div className='cart'>
              <Link to="/cart"><ShoppingCartIcon className="cart-icon"/></Link>
            </div>
            <aside className="sidebar">
                  <img className="logo-blanc" src="/images/logo_blanc.png"></img>
              <button className="sidebar-close-button" onClick={closeMenu}>
                  x
              </button>
                <ul className="categories">
                  <li>
                    <Link to="/category/illustrations" className="category-btn" onClick={closeMenu}>Illustrations</Link>
                  </li>
                  <li>
                    <Link to="/category/peintures" className="category-btn" onClick={closeMenu}>Peintures</Link>
                  </li>
                  <li>
                    <Link to="/category/stickers" className="category-btn" onClick={closeMenu}>Stickers</Link>
                  </li>
                  <li>
                    <Link to="/category/tshirts" className="category-btn" onClick={closeMenu}>T-Shirts</Link>
                  </li>
                  <li>
                    <Link to="/store" className="category-btn" onClick={closeMenu}>Catégories</Link>
                  </li>
                </ul>
            </aside>
          </section>
          {!category ? (
            <section id="homestore">
              <Link to="/category/peintures" style={{width:"50%"}}><div className="category-box">
                <img className="category-img" src="./images/alien_bagel.jpg" />
                <div className="category-name">Peintures</div>
              </div></Link>
              <Link to="/category/illustrations" style={{width:"50%"}} ><div className="category-box">
                <img className="category-img" src="./images/alien_bagel.jpg" />
                <div className="category-name">Illustrations</div>
              </div></Link>
              <Link to="/category/stickers" style={{width:"50%"}}><div className="category-box">
                <img className="category-img" src="./images/alien_bagel.jpg" />
                <div className="category-name">Stickers</div>
              </div></Link>
              <Link to="/category/tshirts" style={{width:"50%"}}><div className="category-box">
                <img className="category-img" src="./images/alien_bagel.jpg" />
                <div className="category-name">T-Shirts</div>
              </div></Link>
            </section>
          ) : (
            <section id="store-products">
              {category && <h2 className="title">{category}</h2>}
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
                            <span className="product-price"> {(product.price).toFixed(2)}$ </span>
                         {product.countInStock > 0 ?
                            (<div className="add-cart">
                            </div> ) : (
                            <div className="out-of-stock">Out Of Stock</div>
                          )}
                       </div>
                     </div>
                   </li>
                  ))}
                </ul>
            )}
            </section>
            )}
          </section>
        )
         
      }