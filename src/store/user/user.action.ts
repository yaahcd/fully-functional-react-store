import { userActionTypes } from "./user.types";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { AdditionalInfo, UserData } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type CheckUserSession = Action<userActionTypes.checkUserSession>;

export type SetCurrentUser = ActionWithPayload<userActionTypes, UserData>;

export type GoogleSignInStart = Action<userActionTypes.googleSignInStart>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(userActionTypes.checkUserSession)
);

export type EmailSignInStart = ActionWithPayload<
  userActionTypes.emailSignInStart,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  userActionTypes.signInSuccess,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  userActionTypes.signInFailed,
  Error
>;

export type SignUpStart = ActionWithPayload<
  userActionTypes.signUpStart,
  { email: string }
>;

export type SignUpSuccess = ActionWithPayload<
  userActionTypes.signUpSuccess,
  { user: User; additionalDetails: AdditionalInfo }
>;

export type SignUpFailed = ActionWithPayload<
  userActionTypes.signUpFailed,
  Error
>;

export type SignOutStart = Action<userActionTypes.signOutStart>;

export type SignOutSuccess = Action<userActionTypes.signOutSuccess>;

export type SignOutFailed = ActionWithPayload<
  userActionTypes.signOutFailed,
  Error
>;

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(userActionTypes.setCurrentUser, user)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(userActionTypes.googleSignInStart)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(userActionTypes.emailSignInStart, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess =>
    createAction(userActionTypes.signInSuccess, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(userActionTypes.signInFailed, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(userActionTypes.signUpStart, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInfo): SignUpSuccess =>
    createAction(userActionTypes.signUpSuccess, { user, additionalDetails })
);

export const signUpFailed = withMatcher((error: Error) =>
  createAction(userActionTypes.signUpFailed, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(userActionTypes.signOutStart)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(userActionTypes.signOutSuccess)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(userActionTypes.signOutFailed, error)
);
