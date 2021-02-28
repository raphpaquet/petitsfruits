import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import './Shipping.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import StoreNav from '../components/StoreNav';


export default function Shipping(props) {

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
    <StoreNav />
    <CheckoutSteps step1 ></CheckoutSteps>
    <div className="shipping-form">
      <form onSubmit={submitHandler} >
        <ul className="form-ship">
          <div className="contact-info">
            <li>
              <input 
                type="text" 
                autoCapitalize="off" 
                name="email-phone" 
                id="email-phone" 
                placeholder="Courriel ou Numéro De Téléphone" 
                required="true"
                onChange={(e) => setContact(e.target.value)}>
              </input>
            </li>
          </div>
          <div className="shipping-info">
            <div className="name-info">
              <li>
                <input 
                  type="text" 
                  name="first-name" 
                  id="first-name" 
                  placeholder="Prénom" 
                  onChange={(e) => setFirstName(e.target.value)}>
                </input>
              </li>
              <li>
                <input 
                  type="text" 
                  name="last-name" 
                  id="last-name" 
                  placeholder="Nom De Famille" 
                  required="true"
                  onChange={(e) => setLastName(e.target.value)}>
                </input>
              </li>
            </div>
            <li>
              <input 
                type="text" 
                name="address" 
                id="address" 
                placeholder="Adresse" 
                required="true"
                onChange={(e) => setAddress(e.target.value)}>
              </input>
            </li>
            <li>
              <input 
                type="text" 
                name="appartment" 
                id="appartment" 
                placeholder="Appartement" 
                required="true"
                onChange={(e) => setAppartment(e.target.value)}>
              </input>
            </li>
            <li>
              <input 
                type="text" 
                name="city" 
                id="city" 
                placeholder="Ville" 
                required="true"
                onChange={(e) => setCity(e.target.value)}>
              </input>
            </li>
            <div className="country-info">
              <li>
                <select id="country" 
                  placeholder="Pays"
                  required="true"
                  onChange={(e) => setCountry(e.target.value)}>
                    <option value="" disabled selected>pays</option>
                    <option>Canada</option>
                </select>
              </li>
              <li>
                <select id="province" 
                  placeholder="Province"
                  required="true"
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
                <input 
                  placeholder="Code Postal" 
                  type="text" 
                  name="postalCode" 
                  id="postalCode" 
                  required="true"
                  onChange={(e) => setPostalCode(e.target.value)}>
                </input>
              </li>
            </div>
            <div className="button-choice">
                <Link to="/cart"><button className="button-cart" ><ArrowBackIosIcon />retour panier</button></Link>
                <button type="submit" className="button min-width">Continue</button>
            </div>
          </div>
        </ul>
      </form>
    </div>
  </div>
  )
}
