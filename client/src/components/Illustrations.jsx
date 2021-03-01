import './Illustrations.scss';

import { HashLink } from 'react-router-hash-link';
import StoreNav from './StoreNav';
import Navigation from './Navigation';
import { useState } from 'react';

export default function Illustrations(props) {


  const [tattoo, setTattoo] = useState(false);
  const [illustration, setIllustration] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  const getCategory = (category) => {
    if (category == 'Tattoo') {
      setTattoo(true);
    } else if (category !== 'Tattoo') {
      setTattoo(false)
    }
    if (category == 'Illustrations') {
      setIllustration(true)
    } else if (category !== 'Illustrations') {
      setIllustration(false)
    }
    if (category == 'Portfolio') {
      setPortfolio(true)
    } else if (category !== 'Portfolio') {
      setIllustration(false)
    }
  }

  // const listCategoryToBuy = (cat) => products.filter(product => product.category === cat).map((product) => (
  //   <div className="product-wrapper">
  //     {rangeS1 && product.store_id === 1 || rangeS2 && product.store_id === 2 || rangeS3 && product.store_id === 3 || rangeS4 && product.store_id === 4 || rangeS5 && product.store_id === 5 || rangeS6 && product.store_id === 6 || rangeS7 && product.store_id === 7 || rangeS8 && product.store_id === 8 ? (
  //       <Animated animationIn="fadeInUp" animationOut="backOutDown" isVisible={true}>
  //         <div key={product.id} className="product-image-section">
  //           <img src={product.image} />
  //           <div className="product-description">
  //             <p>{product.description}</p>
  //           </div>
  //         </div>
  //         <h3>{product.name}</h3>
  //         <h5>From {productsByStore(product)}</h5>
  //         <div className="price-and-add">
  //           <span>${(product.price).toFixed(2)}</span><button type="submit" onClick={() => addToCart(product)}>Add</button>
  //         </div>
  //       </Animated>

    const listImagesByCategory = (category) => {
      <ul className="illustrations-ul">
        <li className="illustrations-li">
          <img className="img-illustration" src="./images/alien_bagel.jpg"></img>
        </li>
        <li className="illustrations-li">
          <img className="img-illustration" src="./images/alien_habitat.jpg"></img>
        </li>
        <li className="illustrations-li">
          <img className="img-illustration" src="./images/alien_jarry.jpg"></img>
        </li>
        <li className="illustrations-li">
          <img className="img-illustration" src="./images/alien_metro.jpg"></img>
        </li>
        <li className="illustrations-li">
          <img className="img-illustration" src="./images/alien_orange.jpg"></img>
        </li>
        <li className="illustrations-li">
          <img className="img-illustration" src="./images/alien_skate.jpg"></img>
        </li>
      </ul>
    }

  return (
    <section id='illustrations'>
      <Navigation 
      />
          {tattoo === true ? (
            <div className="tattoo">
              <h1 className="title">Tattoo</h1>
              <section className="grid">
                {listImagesByCategory()}
              </section>
            </div>
          ) : null}
          {illustration === true ? (
            <div className="illustrations">
              <h1 className="title">Illustrations</h1>
              <section className="grid">
                {listImagesByCategory('illustrations')}
              </section>
            </div>
          ) : null}
          {portfolio === true ? (
            <div className="portfolio">
              <h1 className="title">Portfolio</h1>
              <section className="grid">
                {listImagesByCategory('portfolio')}
              </section>
            </div>
          ) : null}
    </section>
  )
}