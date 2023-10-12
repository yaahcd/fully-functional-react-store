import { createAction } from "../../utils/reducer/reducer.utils";
import { cartActionTypes } from "./cart.types";


const addCartItem = (cartItems, productToAdd) => {
    if (cartItems.find((item) => item.id === productToAdd.id)) {
      return cartItems.map((item) => {
        if (item.id === productToAdd.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
      (item) => item.id === productToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((item) => item.id !== productToRemove.id);
    }
  
    return cartItems.map((item) => {
      if (item.id === productToRemove.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
  };
  
  const clearCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  };

export const setIsCartOpen = (boolean) => createAction(cartActionTypes.setCartOpen, boolean)

const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
  }

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
