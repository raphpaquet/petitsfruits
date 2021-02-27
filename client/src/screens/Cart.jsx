import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import './Cart.scss';
import ClearIcon from '@material-ui/icons/Clear';
import StoreNav from "../components/StoreNav";


export default function Cart(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [])

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const checkoutHandler = () => {
    props.history.push("/shipping")
  }

  return (
    <>
    <StoreNav />
    <div id="cart">
      <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3 className="title">panier</h3>
            </li>
            {
              cartItems.length === 0 ?
                <div className="text-simple">Le panier est vide</div>
                :
                cartItems.map(item =>
                  <li>
                    <button className="button-delete" onClick={() => removeFromCartHandler(item.product)}>
                      <ClearIcon />
                    </button>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name-qty">
                      <div>
                        <Link className="cart-name" to={"/product/" + item.product}>
                          {item.name}
                        </Link>
                      </div>
                      <div className="cart-qty">
                        Quantité:
                      <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                          {[...Array(item.countInStock).keys()].map(x =>
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                          )}
                      </select>
                      </div>
                    </div>
                    <div className="cart-price">
                      ${item.price}
                    </div>
                  </li>
                )
            }
          </ul>
        </div>
        <div className="cart-action">
          <div className="subtotal">
            Sous-total : &nbsp;
             {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} $
             <span>Shipping : </span>
          </div>

          <button onClick={checkoutHandler} className="button" disabled={cartItems.length === 0}>
            Passer la commande
          </button>
          <div className="back-shopping">
            <Link to="/store" className="back-shopping">Continuer à magasiner</Link>
          </div>
        </div>

      </div>
  </div>
  </>
  )}
