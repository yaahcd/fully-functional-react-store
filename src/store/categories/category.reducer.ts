import { Category, categoriesActionTypes } from "./category.types";
import { CategoryAction } from "./category.action";

export type CategoriesState = {
  readonly categories: Category[],
  readonly isLoading: boolean,
  readonly error: Error | null
}

export const categoriesInitialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null
};

export const categoriesReducer = (
  state = categoriesInitialState,
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case categoriesActionTypes.fetchCategoriesStart:
      return {
        ...state,
        isLoading: true
      }
    case categoriesActionTypes.fetchCategoriesSuccess:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case categoriesActionTypes.fetchCategoriesFailed:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
};
