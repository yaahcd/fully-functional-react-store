import "./categoryPreview.styles.scss";
import ProductCard from "../productCard/ProductCard";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
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
