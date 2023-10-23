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

export const signUpStart = (email, password, displayName) =>
  createAction(userActionTypes.signUpStart, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(userActionTypes.signUpSuccess, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(userActionTypes.signUpFailed, error);

export const signOutStart = () => createAction(userActionTypes.signOutStart);

export const signOutSuccess = () =>
  createAction(userActionTypes.signOutSuccess);

export const signOutFailed = (error) =>
  createAction(userActionTypes.signOutFailed, error);
