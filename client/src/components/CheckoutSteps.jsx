import './CheckoutSteps.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function CheckoutSteps(props) {
  return (
    <div className="checkout-steps">
      <div className={props.step1 ? 'active'  : ''}>Livraison</div><ArrowForwardIosIcon />
      <div className={props.step2 ? 'active'  : ''}>Paiement</div><ArrowForwardIosIcon/>
      <span className={props.step3 ? 'active'  : ''}>Confirmation</span>
    </div>
  )
}