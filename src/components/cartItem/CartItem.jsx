import "./cartItem.styles.scss";

function CartItem({ cartItem }) {
  return (
    <div className="cart-item-container">
      <img src={cartItem.imageUrl} alt={`Picture for ${cartItem.name}`} />
      <div className="item-details">
        <span className="name">{cartItem.name}</span>
        <span className="price">{cartItem.quantity}</span>
      </div>
    </div>
  );
}

export default CartItem;
