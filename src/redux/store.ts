import { configureStore } from "@reduxjs/toolkit";
import alertSliceReducer from "./alertSlice";

export default configureStore({
  reducer: {
    alert: alertSliceReducer,
  },
});
