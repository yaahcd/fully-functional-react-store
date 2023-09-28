import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
