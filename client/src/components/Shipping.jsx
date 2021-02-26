import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import './Shipping.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function Shipping(props) {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
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
    dispatch(saveShipping({ contact, firstName, lastName, appartment, province, address, city, postalCode, country }));
    props.history.push('payment');
  }


  return (
  <div id="shipping">
    <CheckoutSteps step1 ></CheckoutSteps>
    <div className="shipping-form">
      <form onSubmit={submitHandler} >
        <ul className="form-ship">
          <div className="contact-info">
          <li>
              <h2>Contact</h2>
            </li>
            <li>
              <input 
                type="text" 
                autoCapitalize="off" 
                name="email-phone" 
                id="email-phone" 
                placeholder="Courriel ou numéro de téléphone" 
                onChange={(e) => setContact(e.target.value)}>
              </input>
            </li>
          </div>
          <div className="shipping-info">
            <li>
              <h2>Information de livraison</h2>
            </li>

            <div className="name-info">
              <li>
                <input 
                  type="text" 
                  name="first-name" 
                  id="first-name" 
                  placeholder="prénom" 
                  onChange={(e) => setFirstName(e.target.value)}>
                </input>
              </li>
              <li>
                <input 
                  type="text" 
                  name="last-name" 
                  id="last-name" 
                  placeholder="nom de famille" 
                  onChange={(e) => setLastName(e.target.value)}>
                </input>
              </li>
            </div>
            <li>
              <input 
                type="text" 
                name="address" 
                id="address" 
                placeholder="addresse" 
                onChange={(e) => setAddress(e.target.value)}>
              </input>
            </li>
            <li>
              <input 
                type="text" 
                name="appartment" 
                id="appartment" 
                placeholder="appartement" 
                onChange={(e) => setAppartment(e.target.value)}>
              </input>
            </li>
            <li>
              <input 
                type="text" 
                name="city" 
                id="city" 
                placeholder="ville" 
                onChange={(e) => setCity(e.target.value)}>
              </input>
            </li>
            <div className="country-info">
              <li>
                <select id="country" 
                  placeholder="pays"
                  onChange={(e) => setCountry(e.target.value)}>
                    <option value="" disabled selected>pays</option>
                    <option>Canada</option>
                </select>
              </li>
              <li>
                <select id="province" 
                  placeholder="province"
                  onChange={(e) => setProvince(e.target.value)}>
                    <option value="" disabled selected>province</option>
                    <option>AB</option>
                    <option>BC</option>
                    <option>PE</option>
                    <option>MB</option>
                    <option>NB</option>
                    <option>NS</option>
                    <option>ON</option>
                    <option>QC</option>
                    <option>SK</option>
                    <option>NL</option>
                    <option>YT</option>
                    <option>NT</option>
                    <option>NU</option>
                </select>
              </li>
              <li>
                <input placeholder="code postal" type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
                </input>
              </li>
            </div>
            <div className="button-choice">
                <Link to="/cart"><button className="button cart" ><ArrowBackIosIcon />retour panier</button></Link>
                <button type="submit" className="button ship">Continue</button>
            </div>
          </div>
        </ul>
      </form>
    </div>
  </div>
  )
}
