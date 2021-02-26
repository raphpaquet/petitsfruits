import './CheckoutSteps.scss';


export default function CheckoutSteps(props) {
  return (
    <div className="checkout-steps">
      <div className={props.step1 ? 'active'  : ''}>Shipping</div>
      <div className={props.step2 ? 'active'  : ''}>Paiement</div>
      <div className={props.step3 ? 'active'  : ''}>Confirmation</div>
    </div>
  )
}