import './Product.scss';
import StoreNav from './StoreNav';

export default function Product(props) {
  return (
    <section id="solo-product">
      <StoreNav />
        <div className="header">
        <img className="product-img" src="http://localhost:3002/images/alien_metro.jpg"></img>
          <h1 className="product-name">Vin Vilain</h1>
          <div className="price">75.00$</div>
        <div className="add-cart">
          <button className='add'>Ajouter au panier</button>
        </div>
        <div className="description">
          <p className="desc">Toile 9x12" sur papier aquarelle</p>
        </div>
        </div>
    </section>
  )
}