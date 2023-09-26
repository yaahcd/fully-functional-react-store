import Button from "../button/Button";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import "./productCard.styles.scss";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={`Picture of ${product.name}`} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
}

export default ProductCard;
