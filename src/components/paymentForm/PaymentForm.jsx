import { CardElement } from "@stripe/react-stripe-js"
import { PaymentFormContainer, FormContainer, PaymentButton } from "./paymentForm.styles"

function PaymentForm() {
  return (
    <PaymentFormContainer>
        <FormContainer>
            <h2>Credit Card Payment</h2>
            <CardElement/>
        </FormContainer>
        <PaymentButton>Pay now</PaymentButton>
      
    </PaymentFormContainer>
  )
}

export default PaymentForm
