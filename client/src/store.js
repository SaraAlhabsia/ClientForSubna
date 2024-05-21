import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "./Features/UserSlice";


export const store = configureStore({
  reducer: {
    users: UseReducer,
    
  },
});
