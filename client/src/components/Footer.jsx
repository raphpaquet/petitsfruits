import './Footer.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Footer() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin

  return (
  <footer id="footer">
    <div className="rights">
      @ 2021 Raphaëlle Paquet | All Rights Reserved.
    </div>
    {
      userInfo ? <Link to="/admin">Admin page</Link> :
    <div className="admin">
      <Link to="/signin">Admin</Link>
    </div>
    }
  </footer>
  )
}
