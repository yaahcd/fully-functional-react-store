import { userActionTypes } from "./user.types";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.signInSuccess:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.signOutSuccess:
      return {
        ...state,
        currentUser: null,
      }; 
    case userActionTypes.signInFailed:
    case userActionTypes.signUpFailed:
    case userActionTypes.signOutFailed:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
