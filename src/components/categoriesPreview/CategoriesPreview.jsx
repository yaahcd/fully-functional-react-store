import { useContext, Fragment } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import CategoryPreview from "../categoryPreview/CategoryPreview";

function CategoriesPreview() {
    const { productsList } = useContext(ProductsContext);

    return (
        <Fragment>
          {Object.keys(productsList).map((title) => {
            const products = productsList[title]
            return <CategoryPreview key={title} title={title} products={products}/>
          })}
        </Fragment>
      );
}

export default CategoriesPreview
