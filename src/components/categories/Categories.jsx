import CategoryItem from "../categoryItem/CategoryItem";
import categories from "./categories.json";
import './categories.styles.scss'

function Categories() {
  return (
    <div className="categories-container">
    {categories.map(({ title, id, imageUrl }) => (
      <CategoryItem key={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
  )
}

export default Categories
