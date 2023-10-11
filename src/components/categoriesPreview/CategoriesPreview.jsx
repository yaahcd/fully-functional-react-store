import { Fragment } from "react";
import CategoryPreview from "../categoryPreview/CategoryPreview";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesMap } from "../../store/categories/category.action";

function CategoriesPreview() {
  const categoryMap = useSelector(selectCurrentCategory);
  

  

  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
}

export default CategoriesPreview;
