import { Fragment } from "react";
import CategoryPreview from "../categoryPreview/CategoryPreview";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../spinner/Spinner";

function CategoriesPreview() {
  const categoryMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoryMap).map((title) => {
          const products = categoryMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
}

export default CategoriesPreview;
