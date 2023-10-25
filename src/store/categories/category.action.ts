import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { categoriesActionTypes, Category } from "./category.types";

export type FetchCategoriesStart =
  Action<categoriesActionTypes.fetchCategoriesStart>;

export type FetchCategoriesSuccess = ActionWithPayload<
  categoriesActionTypes.fetchCategoriesSuccess,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  categoriesActionTypes.fetchCategoriesFailed,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(categoriesActionTypes.fetchCategoriesStart);

export const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FetchCategoriesSuccess =>
  createAction(categoriesActionTypes.fetchCategoriesSuccess, categoriesArray);

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
  createAction(categoriesActionTypes.fetchCategoriesFailed, error);
