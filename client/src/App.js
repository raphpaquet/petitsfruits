import './App.scss';
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Footer from './components/Footer';
import Store from './components/Store';
import Order from './components/Order';
import Products from './components/Products';
import Shipping from './components/Shipping';
import PlaceOrder from './components/PlaceOrder';
import Product from './components/Product';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Signin from './components/Signin';
import { useSelector } from 'react-redux';
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import Tattoo from './components/Tattoo';


const history = createBrowserHistory();

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  return (
    <BrowserRouter >
      <div className="App">
          <Route path="/store" component={Store} />
          <Route path="/order/:id" component={Order} />
          <Route path="/products" component={Products} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/category/:id" component={Store} />
          <Route path='/signin' component={Signin} />
          <Route path='/portfolioacademique' component={Portfolio} />
          <Route path='/tattoo' component={Tattoo} />
          <Route path='/' exact={true} component={HomePage} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
