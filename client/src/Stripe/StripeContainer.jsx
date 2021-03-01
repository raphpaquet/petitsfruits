import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51I6Jt9HsmgbtTrbqfCLFE3iOym9EzX83fUD26QzcT23sPMbAdp0lCcj0gev2ldujHpqI7HbTMa3unA5acP6UaN3U00AcA7HfMG";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function Stripe() {
  return (
      <Elements stripe={stripeTestPromise} >
        <CheckoutForm />
      </Elements>
  );
};