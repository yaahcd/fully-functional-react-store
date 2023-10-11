import { createAction } from "../../utils/reducer/reducer.utils";
import { categoriesActionTypes } from "./category.types";

export const setCategoriesMap = (categoriesMap) => createAction(categoriesActionTypes.setCategoriesMap, categoriesMap)