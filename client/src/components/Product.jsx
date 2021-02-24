import './Product.scss';
import StoreNav from './StoreNav';

export default function Product(props) {
  console.log(props.match.params.id)

  return (
    <section id="solo-product">
      <StoreNav />
        <div className="header">
        <img className="product-img" src="http://localhost:3002/images/alien_metro.jpg"></img>
          <h1 className="product-name">Vin Vilain</h1>
          <div className="price">75.00$
            <div className="qte">Quantité:
              <select className="qte-select" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
        <div className='action'>
          <div className="add-cart">
            <button className='add'>Ajouter au panier</button>
          </div>
        </div>
        <div className="description">
          <p className="desc">Toile 9x12" sur papier aquarelle</p>
        </div>
        </div>
    </section>
  )
}