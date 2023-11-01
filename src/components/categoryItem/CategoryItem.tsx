import { useNavigate } from "react-router-dom";
import {
  CategoryHomeContainer,
  BackgroundImage,
  Body,
} from "./CategoryItem.styles";

export type CategoryItemProps = {
  title: string;
  imageUrl: string;
  route: string;
};

function CategoryItem({ title, imageUrl, route }: CategoryItemProps) {

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
