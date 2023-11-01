import { FC } from 'react';
import { CartItemContainer, ItemDetailsContainer } from "./CartItem.styles";
import { CartItem as TCartItem } from "../../store/cart/cart.types";

export type CartItemProps = {
  cartItem: TCartItem
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
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
