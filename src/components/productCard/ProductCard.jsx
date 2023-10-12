import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={product.imageUrl} alt={`Picture of ${product.name}`} />
      <Footer>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
}

export default ProductCard;
