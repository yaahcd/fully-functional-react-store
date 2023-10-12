import { cartActionTypes } from "./cart.types";

export const cartInitialState = {
    isCartOpen: false,
    cartItems: [],
  };
    
export const cartReducer = (state = cartInitialState, action = {}) => {
    switch (action.type) {
      case cartActionTypes.setCartItems:
        return {
          ...state,
          cartItems: action.payload,
        };
      case cartActionTypes.setCartOpen:
        return {
          ...state,
          isCartOpen: action.payload,
        };
      default:
        return state
    }
  };