import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const userActionTypes = {
  setCurrentUser: "setCurrentUser",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case userActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      throw new Error(`Unknown type ${type} in userReducer`);
  }
};

const initialState = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);

  const setCurrentUser = (user) => {
    dispatch({ type: userActionTypes.setCurrentUser, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
