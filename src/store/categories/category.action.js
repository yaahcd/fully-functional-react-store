import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { categoriesActionTypes } from "./category.types";

export const fetchCategoriesStart = () =>
  createAction(categoriesActionTypes.fetchCategoriesStart);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(categoriesActionTypes.fetchCategoriesSuccess, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(categoriesActionTypes.fetchCategoriesFailed, error);

export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
