import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: {}
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    }
  }
});

const userConfigSlice = createSlice({
  name: "userConfig",
  initialState: {
    value: {}
  },
  reducers: {
    setUserConfig: (state, action) => {
      state.value = action.payload;
    }
  }
});


export const { setData } = dataSlice.actions;
export const { setUserConfig } = userConfigSlice.actions;
export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    userConfig: userConfigSlice.reducer
  }
});