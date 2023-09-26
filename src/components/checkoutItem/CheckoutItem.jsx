import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./checkoutItem.styles.scss";

function CheckoutItem({ cartItem }) {
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={`Picture for ${cartItem.name}`} />
      </div>
      <span className="name">{cartItem.name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;