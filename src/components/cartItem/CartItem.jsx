import { CartItemContainer, ItemDetailsContainer } from "./CartItem.styles";

function CartItem({ cartItem }) {
  return (
    <CartItemContainer>
      <img src={cartItem.imageUrl} alt={`Picture for ${cartItem.name}`} />
      <ItemDetailsContainer>
        <span>{cartItem.name}</span>
        <span>{cartItem.quantity}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
