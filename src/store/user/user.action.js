import { userActionTypes } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(userActionTypes.setCurrentUser, user);
