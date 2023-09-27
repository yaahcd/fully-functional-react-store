import "./categoryPreview.styles.scss";
import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
        <div className="preview">
          {products
            .filter((_, index) => index < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      </h2>
    </div>
  );
}

export default CategoryPreview;
