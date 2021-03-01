import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import './Shipping.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import StoreNav from '../components/StoreNav';


export default function Shipping(props) {
  
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [contact, setContact] = useState(shippingAddress.contact);
  const [firstName, setFirstName] = useState(shippingAddress.firstName);
  const [lastName, setLastName] = useState(shippingAddress.lastName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [appartment, setAppartment] = useState(shippingAddress.appartment);
  const [city, setCity] = useState(shippingAddress.city);
  const [province, setProvince] = useState(shippingAddress.province);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);


  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ contact, firstName, lastName, appartment, province, address, city, postalCode, country }));
    props.history.push('/payment');
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
                name="contact" 
                id="contact" 
                placeholder="Courriel ou Numéro De Téléphone" 
                required
                onChange={(e) => setContact(e.target.value)}>
              </input>
            </li>
          </div>
          <div className="shipping-info">
            <div className="name-info">
              <li>
                <input 
                  type="text" 
                  name="firsName" 
                  id="firstName" 
                  placeholder="Prénom" 
                  onChange={(e) => setFirstName(e.target.value)}>
                </input>
              </li>
              <li>
                <input 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  placeholder="Nom De Famille" 
                  required
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
                required
                onChange={(e) => setAddress(e.target.value)}>
              </input>
            </li>
            <li>
              <input 
                type="text" 
                name="appartment" 
                id="appartment" 
                placeholder="Appartement" 
                onChange={(e) => setAppartment(e.target.value)}>
              </input>
            </li>
            <li>
              <input 
                type="text" 
                name="city" 
                id="city" 
                placeholder="Ville" 
                required
                onChange={(e) => setCity(e.target.value)}>
              </input>
            </li>
            <div className="country-info">
              <li>
                <select id="country" 
                  placeholder="Pays"
                  required
                  onChange={(e) => setCountry(e.target.value)}>
                    <option value="" disabled selected>pays</option>
                    <option>Canada</option>
                </select>
              </li>
              <li>
                <select id="province" 
                  placeholder="Province"
                  required
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
                  required
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
