import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { cartActionTypes, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
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

const clearCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export type SetIsCartOpen = ActionWithPayload<
  cartActionTypes.setCartOpen,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  cartActionTypes.setCartItems,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(cartActionTypes.setCartOpen, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(cartActionTypes.setCartItems, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = clearCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};
