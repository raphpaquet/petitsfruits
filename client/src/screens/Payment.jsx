import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import StoreNav from '../components/StoreNav';
import StripeContainer from '../Stripe/StripeContainer'

export default function Payment(props) {

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('Stripe');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod({ paymentMethod }));
    props.history.push('/placeorder');
  };
  return (
    <div>
      <StoreNav />
      <CheckoutSteps step1 step2 ></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2 className="title">Paiement</h2>
            </li>
            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="Stripe"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label htmlFor="paymentMethod">Stripe</label>
              </div>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
          <StripeContainer />
      </div>
    </div>
  );
}
