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
    case categoriesActionTypes.fetchCategoriesSuccess:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
