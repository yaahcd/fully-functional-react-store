import "./cartIcon.styles.scss";
import cartIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    return setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={cartIcon} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
