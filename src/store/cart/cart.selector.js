import { createSelector } from "reselect";



const newCartCount = newCartItems.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  const newCartTotal = newCartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
