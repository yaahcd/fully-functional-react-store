import "./productCard.styles.scss";
import Button from "../button/Button";

function ProductCard({ product }) {
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={`Picture of ${product.name}`} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
}

export default ProductCard;
