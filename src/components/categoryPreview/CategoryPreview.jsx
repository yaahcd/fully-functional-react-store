import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";
import { CategoryPreviewContainer, Title, Preview } from "./CategoryPreview.styles";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
        <Preview>
          {products
            .filter((_, index) => index < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </Preview>
      </h2>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
