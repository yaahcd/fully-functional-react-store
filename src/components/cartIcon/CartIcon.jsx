import cartIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    return setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={cartIcon} className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
