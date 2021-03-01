import './App.scss';
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Footer from './components/Footer';
import Store from './screens/Store';
import Order from './screens/Order';
import Products from './screens/Products';
import Shipping from './screens/Shipping';
import PlaceOrder from './screens/PlaceOrder';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Payment from './screens/Payment';
import Signin from './screens/Signin';
import { useSelector } from 'react-redux';
import HomePage from './screens/HomePage';
import Portfolio from './screens/Portfolio';
import Tattoo from './screens/Tattoo';
import StoreHome from './screens/StoreHome';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProductCategories } from './actions/productActions';
import AdminRoute from './components/AdminRoute';



const history = createBrowserHistory();

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);



  return (
    <BrowserRouter >
      <div className="App">
          <Route path="/store" component={StoreHome} />
          <Route path="/order/:id" component={Order} />
          <Route path="/products" component={Products} /> 
          {/* NEED TO REMOVE LATER */}
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/search/category/:category" component={Store} />
          <Route path='/signin' component={Signin} />
          <Route path='/portfolioacademique' component={Portfolio} />
          <Route path='/tattoo' component={Tattoo} />
          <AdminRoute path="/products" component={Products} />
          <Route path='/' exact={true} component={HomePage} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
