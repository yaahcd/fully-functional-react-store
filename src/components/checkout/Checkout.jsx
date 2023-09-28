import "./Checkout.styles.jsx";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import CheckoutItem from "../checkoutItem/CheckoutItem";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./Checkout.styles.jsx";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

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
