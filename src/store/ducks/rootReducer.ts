import { combineReducers } from "@reduxjs/toolkit";
import cart from "./cart/slice";
import auth from "./auth/slice";
import job from "./job/slice";

const createRootReducer = () => {
  return combineReducers({
    cart,
    auth,
    job,
  });
};

export default createRootReducer;
