import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './Product.scss';
import StoreNav from './StoreNav';
import { detailsProduct } from '../actions/productActions';

export default function Product(props) {

  const [qty, setQty] = useState(1)
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch(); 
 
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

  return (
    <section id="solo-product">
      <StoreNav />
      {loading ? (
      <div>Loading ...</div> 
      ) : error ? (
      <div>{error}</div> 
      ) : (
        <div className="product-container">
        <img className="product-img" src={product.image}></img>
          <h1 className="product-name">{product.name}</h1>
          <div className="price">{(product.price)}$
            <div className="qte">Quantité:
              <select className="qte-select" value={qty} onChange={(e) => {setQty(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map(x => 
                  <option value={x + 1} key={x + 1}>{x + 1}</option>)}
              </select>
            </div>
          </div>
         <div className='action'>
          {product.countInStock > 0 ?
            (<div className="add-cart">
              <button className='add' onClick={handleAddToCart}>Ajouter au panier</button>
            </div> ) : (
            <div className="out-of-stock">Out Of Stock</div>
          )}
          </div>
        <div className="description">
          <p className="desc">{product.description}</p>
        </div>
        </div>
      )}
    </section>
  )
}