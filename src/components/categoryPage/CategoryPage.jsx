import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { CategoryContainer, SingleCategoryPageTitle } from "./CategoryPage.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

function CategoryPage() {
  const { category } = useParams();
  const categoryMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

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
