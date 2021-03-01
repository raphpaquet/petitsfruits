import { Link } from 'react-router-dom';
import '../screens/Store.scss';


export default function Product(props) {
  const { product } = props;
  return (    
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
  );
}