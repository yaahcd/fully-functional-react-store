import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  productsList: {},
});

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState({});
  const value = { productsList, setProductsList };

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProductsList(categoryMap)
    };

    getCategories();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
