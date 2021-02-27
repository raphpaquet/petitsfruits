import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import './PlaceOrder.scss';
import './Cart.scss';
import StoreNav from './StoreNav';


export default function PlaceOrder(props) {

  const cart = useSelector(state => state.cart);
  // const orderCreate = useSelector(state => state.orderCreate);
  // const { loading, success, error, order } = orderCreate;

  const { cartItems, shipping, payment } = cart;
  // if (!shipping.address) {
  //   props.history.push("/shipping");
  // } else if (!payment.paymentMethod) {
  //   props.history.push("/payment");
  // }
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  // const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice;

  const dispatch = useDispatch();

  // const placeOrderHandler = () => {
  //   // create an order
  //   dispatch(createOrder({
  //     orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
  //     taxPrice, totalPrice
  //   }));
  // }
  // useEffect(() => {
  //   if (success) {
  //     props.history.push("/order/" + order._id);
  //   }

  // }, [success]);

  return (
  <div>
    <StoreNav />
    <CheckoutSteps step1 step2 step3></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3 className="title">Livraison</h3>
          <div>
            {cart.shipping.address}, {cart.shipping.appartment}, {cart.shipping.city},
          {cart.shipping.postalCode}, {cart.shipping.province},
          {cart.shipping.country}
          </div>
        </div>
        <div>
          <h3 className="title">Paiement</h3>
          <div>
            Méthode de paiement: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3 className="title">Aperçu de la commande</h3>
            </li>
            {
              cartItems.length === 0 ?
                <div className="simple-text">Le panier est vide</div>
                :
                cartItems.map(item =>
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
            <button className="button primary full-width"  >Placer la commande</button>
          </li>
          <li>
            <h3>Résumé de la commande</h3>
          </li>
          <li>
            <div>Items</div>
            <div>{(itemsPrice).toFixed(2)}$</div>
          </li>
          <li>
            <div>Livraison</div>
            <div>{(shippingPrice).toFixed(2)}$</div>
          </li>
          <li>
            <div>Total de la commande</div>
            <div>{(totalPrice).toFixed(2)}$</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

