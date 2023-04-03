import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "alert",
  initialState: {
    showAlert: false,
  },
  reducers: {
    showAlert(state, { payload }) {
      return { ...state, showAlert: payload };
    },
  },
});

export const { showAlert } = slice.actions;

export const selectAlert = (state: any) => state.alert;

export default slice.reducer;
