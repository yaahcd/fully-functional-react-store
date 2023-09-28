import "./CartDropdown.styles.jsx";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./CartDropdown.styles.jsx";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        }) : <EmptyMessage>Your cart is empty</EmptyMessage>}
      </CartItems>
      <Button onClick={() => navigate("checkout")}>Go To checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
