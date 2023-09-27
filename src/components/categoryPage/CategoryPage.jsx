import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./categoryPage.styles.scss";
import ProductCard from "../productCard/ProductCard";

function CategoryPage() {
  const { category } = useParams();
  const { productsList } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsList[category])

  useEffect(() => {
    setProducts(productsList[category])
  }, [category, productsList])
 
  return (<div className="category-container">
    {
        products && products.map((product) => {
            return <ProductCard key={product.id} product={product}/>
        })
    }
  </div>);
}

export default CategoryPage;
