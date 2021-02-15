import './Store.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Store(props) {

   const [products, setProducts] = useState('');
   const [loadingProducts, setLoadingProducts] = useState(true);

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
      return <section className="grid">Loading...
      </section>
    } else {

      return (
        <>
          <ul className="products">
            {products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}>
                    <img
                      className="product-image"
                      src={product.image}
                      alt="product"
                      />
                  </Link>
                  <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.description}</div>
                  <div className="product-price">${product.price}</div>
                </div>
              </li>
            ))}
          </ul>
      </>
    );
  }
}