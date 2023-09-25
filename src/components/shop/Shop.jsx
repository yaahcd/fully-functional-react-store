import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../productCard/ProductCard";
import './shop.styles.scss'

function Shop() {
  const { productsList } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {productsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
