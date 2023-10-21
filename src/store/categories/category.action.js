import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { categoriesActionTypes } from "./category.types";

export const fetchCategoriesStart = () =>
  createAction(categoriesActionTypes.fetchCategoriesSuccess);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(categoriesActionTypes.fetchCategoriesSuccess, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(categoriesActionTypes.fetchCategoriesSuccess, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
