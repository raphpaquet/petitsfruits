import './Store.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import './Store.scss'
import StoreNav from './StoreNav'


export default function Store(props) {

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
        <section id='store'>
          <StoreNav />
          <div className="categories">
            <button className="category-btn" onClick={() => getCategory('Peinture')}>Peintures</button>
            <button className="category-btn" onClick={() => getCategory('Illustration')}>Illustrations</button>
            <button className="category-btn" onClick={() => getCategory('Sticker')}>Stickers</button>
            <button className="category-btn" onClick={() => getCategory('Clothing')}>T-Shirts</button>
            <button className="category-btn" onClick={() => getCategory('All')}>Tout</button>
          </div>
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