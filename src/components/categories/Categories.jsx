import CategoryItem from "../categoryItem/CategoryItem";
import categories from "./categories.json";
import { CategoriesContainer } from "./Categories.styles";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesMap } from "../../store/categories/category.action";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories  = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategories();
  }, []);
  
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, imageUrl, route }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} route={route} />
      ))}
    </CategoriesContainer>
  );
}

export default Categories;
