import './Store.scss';
import '../components/Navigation.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions'
import { useEffect } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductCard from '../components/ProductCard'



export default function Store(props) {

  const {
    name = 'all',
    category = 'all',
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
      })
    );
  }, [category, dispatch, name] );

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    return `/search/category/${filterCategory}/name/${filterName}`
  };


    // sidebar open/close
    const openMenu = () => {
      document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
      document.querySelector('.sidebar').classList.remove('open');
    };


  return (
      <section id='store'>
        <section id='navbar'>
          <button onClick={openMenu} className='burger-btn'>
            &#9776;
          </button>
          <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
          <div className='cart'>
            <Link to="/cart"><ShoppingCartIcon className="cart-icon"/></Link>
          </div>
          <aside className="sidebar">
            <img className="logo-blanc" src="/images/logo_blanc.png"></img>
            <button className="sidebar-close-button" onClick={closeMenu}>
            x
            </button>
              <ul className="categories">
                {loadingCategories ? (
                  <LoadingBox></LoadingBox>
                ) : errorCategories ? (
                  <MessageBox variant="danger">{errorCategories}</MessageBox>
                ) : (
                categories.map((c) => (
                  <li key={c}>
                    <Link
                      className="category-btn"
                      to={`/search/category/${c}`}
                      onClick={() => closeMenu()}
                    >
                      {c}
                    </Link>
                  </li>
                  ))
                )}
              </ul>
          </aside>
        </section>
        <div>
        <section id="store-products">
          <ul className="products">
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
          <>
            {products.length === 0 && (
              <MessageBox>No Product Found</MessageBox>
            )}
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </>
            )}
            </ul>
        </section>
      </div>
    </section>
    )
     
  }