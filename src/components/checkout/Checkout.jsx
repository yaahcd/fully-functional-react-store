import "./Checkout.styles.jsx";
import CheckoutItem from "../checkoutItem/CheckoutItem";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./Checkout.styles.jsx";

function Checkout() {
  const { cartItems, cartTotal } = [];

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: £{cartTotal}</Total>
    </CheckoutContainer>
  );
}

export default Checkout;
