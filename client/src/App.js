import './App.scss';
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from './components/Navigation';
import Illustrations from './components/Illustrations';
import About from './components/About';
import Contact from './components/Contact';
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


const history = createBrowserHistory();

function App() {
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
          <Route path='/signin' component={Signin} />
          <Route path='/' exact={true}>
            <Navigation />
            <Illustrations />
            <About />
            <Contact />
          </Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
