import { useNavigate } from "react-router-dom";
import {
  CategoryHomeContainer,
  BackgroundImage,
  Body,
} from "./CategoryItem.styles";

function CategoryItem({ title, imageUrl, route }) {

  const navigate = useNavigate();

  return (
    <CategoryHomeContainer onClick={() => navigate(`${route}`)}>
      <BackgroundImage image={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryHomeContainer>
  );
}

export default CategoryItem;
