import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { User } from "firebase/auth";
import { userActionTypes } from "./user.types";
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from "./user.action";
import {
  getCurrentUser,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInfo,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: AdditionalInfo
) {
  try {
    const userSnapshot = yield* call(
      createUserDocFromAuth,
      userAuth,
      additionalDetails
    );

    if (userSnapshot) {
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail( {payload} : EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      payload!.email,
      payload!.password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({
  payload
}: SignUpStart) {

  const displayName = payload!.displayName || ""

  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      payload!.email,
      payload!.password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, {displayName}
        ));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* signInAfterSignUp({
  payload
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, payload!.user, payload!.additionalDetails);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(userActionTypes.googleSignInStart, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(userActionTypes.checkUserSession, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(userActionTypes.emailSignInStart, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(userActionTypes.signUpStart, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(userActionTypes.signUpSuccess, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(userActionTypes.signOutStart, signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
