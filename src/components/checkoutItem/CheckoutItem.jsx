import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutItemContainer, ImageContainer, Quantity, Arrow, Value, RemoveButton, BaseSpan } from "./CheckoutItem.styles";

function CheckoutItem({ cartItem }) {
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt={`Picture for ${cartItem.name}`} />
      </ImageContainer>
      <BaseSpan>{cartItem.name}</BaseSpan>

      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>

      <BaseSpan>{cartItem.price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
