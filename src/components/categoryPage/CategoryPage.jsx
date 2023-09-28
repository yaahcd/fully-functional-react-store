import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../productCard/ProductCard";
import { CategoryContainer, SingleCategoryPageTitle } from "./CategoryPage.styles";

function CategoryPage() {
  const { category } = useParams();
  const { productsList } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsList[category]);

  useEffect(() => {
    setProducts(productsList[category]);
  }, [category, productsList]);

  return (
    <Fragment>
      <SingleCategoryPageTitle>{category.toUpperCase()}</SingleCategoryPageTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </Fragment>
  );
}

export default CategoryPage;
