import { createContext, useState } from "react";
import products from "../111 shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(products);
  const value = { productsList, setProductsList };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
