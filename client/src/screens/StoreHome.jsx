import { Link } from 'react-router-dom';
import StoreNav from '../components/StoreNav';


export default function StoreHome(props) {
  return (
    <section id="homestore">
      <StoreNav />
      <Link to="/search/category/peintures" style={{width:"50%"}}><div className="category-box">
        <img className="category-img" src="./images/alien_bagel.jpg" />
        <div className="category-name">Peintures</div>
      </div></Link>
      <Link to="/search/category/illustrations" style={{width:"50%"}} ><div className="category-box">
        <img className="category-img" src="./images/alien_bagel.jpg" />
        <div className="category-name">Illustrations</div>
      </div></Link>
      <Link to="/search/category/stickers" style={{width:"50%"}}><div className="category-box">
        <img className="category-img" src="./images/alien_bagel.jpg" />
        <div className="category-name">Stickers</div>
      </div></Link>
      <Link to="/search/category/tshirts" style={{width:"50%"}}><div className="category-box">
        <img className="category-img" src="./images/alien_bagel.jpg" />
        <div className="category-name">T-Shirts</div>
      </div></Link>
    </section>
  )
}