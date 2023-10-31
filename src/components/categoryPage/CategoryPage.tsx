import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import ProductCard from "../productCard/ProductCard";
import {
  CategoryContainer,
  SingleCategoryPageTitle,
} from "./CategoryPage.styles";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

type CategoryRouteParams = {
  category: string
}

function CategoryPage() {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoryMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <Fragment>
      <SingleCategoryPageTitle>
        {category.toUpperCase()}
      </SingleCategoryPageTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryContainer>
      )}
    </Fragment>
  );
}

export default CategoryPage;
