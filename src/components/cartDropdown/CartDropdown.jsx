import "./cartDropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button>Go To checkout</Button>
    </div>
  );
}

export default CartDropdown;
