import { categoriesActionTypes } from "./category.types";

export const categoriesInitialState = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = categoriesInitialState,
  action = {}
) => {
  switch (action.type) {
    case categoriesActionTypes.setCategoriesMap:
      return {
        ...state,
        categoriesMap: action.payload,
      };
    default:
      return state;
  }
};
