import { CategoryItem } from "../../store/categories/category.types";
import ProductCard from "../productCard/ProductCard";
import { CategoryPreviewContainer, Title, Preview } from "./CategoryPreview.styles";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

function CategoryPreview({ title, products }: CategoryPreviewProps) {
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
