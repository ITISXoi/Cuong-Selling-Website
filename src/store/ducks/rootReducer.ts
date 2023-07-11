import { combineReducers } from "@reduxjs/toolkit";
import example from "./example/slice";
import auth from "./auth/slice";
import job from "./job/slice";
import profile from "./profile/slice";

const createRootReducer = () => {
  return combineReducers({
    example,
    auth,
    job,
    profile,
  });
};

export default createRootReducer;
