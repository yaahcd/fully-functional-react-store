import "./cartDropdown.styles.scss";
import Button from "../button/Button";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go To checkout</Button>
      </div>
    </div>
  );
}

export default CartDropdown;
