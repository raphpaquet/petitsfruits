import './StoreNav.scss';
import { Link } from 'react-router-dom';


export default function StoreNav() {
  return (
    <section id='navbar'>
      <div className='page-title'>
        <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
        <Link to="/store"><span className="name">| boutique</span></Link>
      </div>
    </section>
  )
}