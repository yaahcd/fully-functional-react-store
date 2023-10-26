import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher
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

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
  createAction(categoriesActionTypes.fetchCategoriesStart));

export const fetchCategoriesSuccess = withMatcher((
  categoriesArray: Category[]
): FetchCategoriesSuccess =>
  createAction(categoriesActionTypes.fetchCategoriesSuccess, categoriesArray));

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed =>
  createAction(categoriesActionTypes.fetchCategoriesFailed, error));
