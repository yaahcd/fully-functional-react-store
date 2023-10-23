import { userActionTypes } from "./user.types";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case userActionTypes.signInSuccess:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.signInFailed:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
