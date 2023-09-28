import CategoryItem from "../categoryItem/CategoryItem";
import categories from "./categories.json";
import { CategoriesContainer } from "./Categories.styles";

function Categories() {
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </CategoriesContainer>
  );
}

export default Categories;
