import { CategoryItem } from "../categories/category.types";

export enum cartActionTypes {
    setCartItems = "cart/setCartItems",
    setCartOpen = "cart/setCartOpen",
    setCartCount = "cart/setCartCount",
    setCartTotal = "cart/setCartTotal"
  };

 export type CartItem = CategoryItem & {
  quantity: number
 }