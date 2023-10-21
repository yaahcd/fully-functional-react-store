import { categoriesActionTypes } from "./category.types";

export const categoriesInitialState = {
  categories: [],
  isLoading: false,
  error: null
};

export const categoriesReducer = (
  state = categoriesInitialState,
  action = {}
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
