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
        categories: action.payload,
        isLoading: false
      };
    case categoriesActionTypes.fetchCategoriesFailed:
      return {
        ...state,
        categories: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
