import './CheckoutSteps.scss';


export default function CheckoutSteps(props) {
  return (
    <div className="checkout-steps">
      <div className={props.step1 ? 'active'  : ''}>Shipping</div>
      <div className={props.step1 ? 'active'  : ''}>Paiement</div>
      <div className={props.step1 ? 'active'  : ''}>Confirmation</div>
    </div>
  )
}