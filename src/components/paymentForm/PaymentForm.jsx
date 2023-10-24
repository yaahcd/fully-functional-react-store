import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./paymentForm.styles";

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements){
        return;
    }

    
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment</h2>
        <CardElement />
      </FormContainer>
      <PaymentButton>Pay now</PaymentButton>
    </PaymentFormContainer>
  );
}

export default PaymentForm;
