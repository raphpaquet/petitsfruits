import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import './PlaceOrder.scss';
import './Cart.scss';
import StoreNav from '../components/StoreNav';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function PlaceOrder(props) {

  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); 
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
  <div>
    <StoreNav />
    <CheckoutSteps step1 step2 step3></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3 className="title">Livraison</h3>
          <div>
          <p>
            <strong>Name:</strong> {cart.firstName ? cart.shippingAddress.firstName + cart.shippingAddress.lastName : cart.shippingAddress.lastName} <br />
            <strong>Address: </strong> {cart.shippingAddress.address}, {cart.shippingAddress.appartment}
            {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.province}
            ,{cart.shippingAddress.country}
          </p>
          </div>
        </div>
        <div>
          <h3 className="title">Paiement</h3>
          <div>
            Méthode de paiement: {cart.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3 className="title">Aperçu de la commande</h3>
            </li>
            {
              cart.cartItems.length === 0 ?
                <div className="simple-text">Le panier est vide</div>
                :
                cart.cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name-qty">
                      <div>
                        <Link className="cart-name" to={"/product/" + item.product}>
                          {item.name}
                        </Link>
                      </div>
                      <div>
                        Qté: {item.qty}
                      </div>
                    </div>
                    <div className="cart-price">
                      {(item.price).toFixed(2)}$
                    </div>
                  </li>
                )
            }
          </ul>
        </div>

      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            <h3>Résumé de la commande</h3>
          </li>
          <li>
            <div>Items</div>
            <div>{(cart.itemsPrice).toFixed(2)}$</div>
          </li>
          <li>
            <div>Livraison</div>
            <div>{(cart.shippingPrice).toFixed(2)}$</div>
          </li>
          <li>
            <div>Total de la commande</div>
            <div>{(cart.totalPrice).toFixed(2)}$</div>
          </li>
          <li>
            <button 
              className="button primary full-width" 
              onClick={placeOrderHandler} 
              disabled={cart.cartItems.length === 0}>Placer la commande</button>
          </li>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
        </ul>
      </div>
    </div>
  </div>
  )
}

