const initialState = {
  currentUser: null,
};

export const userActionTypes = {
  setCurrentUser: "setCurrentUser",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
