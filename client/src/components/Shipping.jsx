import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from './CheckoutSteps';

export default function Shipping(props) {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [appartment, setAppartment] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ value, firstName, lastName, appartment, province, address, city, postalCode, country }));
    props.history.push('payment');
  }


  return <div>
    <CheckoutSteps step1 ></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
        <li>
            <h2>Contact Information</h2>
          </li>
          <li>
            <label htmlFor="email_or_phone">
              Email or phone number
          </label>
            <input type="text" autoCapitalize="off" name="email-phone" id="email-phone" onChange={(e) => setValue(e.target.value)}>
            </input>
          </li>
          <li>
            <h2>Shipping</h2>
          </li>
          <li>
            <label htmlFor="first-name">
              First Name
          </label>
            <input type="text" name="first-name" id="first-name" onChange={(e) => setFirstName(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="last-name">
              Last Name
          </label>
            <input type="text" name="last-name" id="last-name" onChange={(e) => setLastName(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="address">
              Adresse
          </label>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="appartment">
              Appartement
          </label>
            <input type="text" name="appartment" id="appartment" onChange={(e) => setAppartment(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="city">
              Ville
          </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="postalCode">
              Code Postal
          </label>
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="province">
              Province
          </label>
            <input type="text" name="province" id="province" onChange={(e) => setProvince(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="country">
              Country
          </label>
            <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
            </input>
          </li>
          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>
        </ul>
      </form>
    </div>
  </div>

}
