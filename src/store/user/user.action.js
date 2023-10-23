import { userActionTypes } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(userActionTypes.setCurrentUser, user);

export const checkUserSession = () =>
  createAction(userActionTypes.checkUserSession);

export const googleSignInStart = () =>
  createAction(userActionTypes.googleSignInStart);

export const emailSignInStart = (email, password) =>
  createAction(userActionTypes.emailSignInStart, { email, password });

export const signInSuccess = (user) =>
  createAction(userActionTypes.signInSuccess, user);

export const signInFailed = (error) =>
  createAction(userActionTypes.signInFailed, error);
