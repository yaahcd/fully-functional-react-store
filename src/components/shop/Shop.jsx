import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview";
import CategoryPage from "../categoryPage/CategoryPage";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { useEffect } from "react";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
}

export default Shop;
