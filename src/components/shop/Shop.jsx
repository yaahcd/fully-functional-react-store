import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview";
import CategoryPage from "../categoryPage/CategoryPage";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../store/categories/category.action";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
}

export default Shop;
