import { createSlice } from "@reduxjs/toolkit";

const loginUserAuthSlice = createSlice({
  name: "loginUserAuth",
  initialState: {
    value: {}
  },
  reducers: {
    setLoginUserCredentials: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setLoginUserCredentials } = loginUserAuthSlice.actions;