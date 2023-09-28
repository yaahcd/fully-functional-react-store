import {
  CategoryHomeContainer,
  BackgroundImage,
  Body,
} from "./CategoryItem.styles";

function CategoryItem({ title, imageUrl }) {
  return (
    <CategoryHomeContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryHomeContainer>
  );
}

export default CategoryItem;
