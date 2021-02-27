import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../screens/Store.scss';
import {useHistory} from 'react-router-dom';
import '../screens/Store.scss';
import './Navigation.scss';


export default function StoreNav(props) {
  const history = useHistory();

  return (
      <section id='navbar'>
        <div >
            <button className='back'
              onClick={history.goBack}>
              Back
          </button>
        </div>
        <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
        <div className='cart'>
          <Link to="/cart"><ShoppingCartIcon className="cart-icon"/></Link>
        </div>
      </section>
  )
}