import { Category } from "./category.types";
import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from "./category.action";
import { AnyAction } from "redux";

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
  action: AnyAction
) => {
  if(fetchCategoriesStart.match(action)){
    return {
            ...state,
            isLoading: true
          }
  }

  if(fetchCategoriesSuccess.match(action)){
    return {
            ...state,
            isLoading: false,
            categories: action.payload,
          };
  }

  if(fetchCategoriesFailed.match(action)){
    return {
            ...state,
            isLoading: false,
            error: action.payload,
          };
  }

  return  state
};
