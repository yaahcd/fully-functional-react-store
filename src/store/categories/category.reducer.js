import { categoriesActionTypes } from "./category.types";

export const categoriesInitialState = {
  categories: [],
};

export const categoriesReducer = (
  state = categoriesInitialState,
  action = {}
) => {
  
  switch (action.type) {
    case categoriesActionTypes.setCategories:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
