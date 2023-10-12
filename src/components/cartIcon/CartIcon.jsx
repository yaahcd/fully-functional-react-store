import cartIcon from "../../assets/shopping-bag.svg";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";

function CartIcon() {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

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
