import CategoryItem from "../categoryItem/CategoryItem";
import categories from "./categories.json";
import { CategoriesContainer } from "./Categories.styles";

function Categories() {
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, imageUrl, route }) => (
        <CategoryItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          route={route}
        />
      ))}
    </CategoriesContainer>
  );
}

export default Categories;
