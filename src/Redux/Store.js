import COMMON_REDUCER from "./Common/CommonReducer";
import SignupReducer from "./Signup/SignupReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    SignupReducer,
    COMMON_REDUCER,
  },
});
