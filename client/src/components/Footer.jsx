import './Footer.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin

  return (
  <footer id="footer">
    <div className="social">
      <FacebookIcon />
      <InstagramIcon />
    </div>
    <div className="admin">
    {userInfo ? (
        <div>Connected</div>
        ) : (
        <Link to="/signin">Admin</Link>
      )}
        {userInfo && userInfo.isAdmin && (
          <Link to="/products">Sarah Page</Link>
        )}
    </div>
    <div className="rights">
      @ 2021 Raphaëlle Paquet | All Rights Reserved.
    </div>
  </footer>
  )
}
