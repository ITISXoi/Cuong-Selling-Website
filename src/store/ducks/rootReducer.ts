import { combineReducers } from "@reduxjs/toolkit";
import cart from "./cart/slice";
import auth from "./auth/slice";
import job from "./job/slice";
import order from "./order/slice";

const createRootReducer = () => {
  return combineReducers({
    cart,
    auth,
    job,
    order,
  });
};

export default createRootReducer;
