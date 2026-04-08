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

// Redux thunk action that also dispatches custom event
export const setEventData = (data) => (dispatch) => {
  dispatch(setData(data));
  
  window.dispatchEvent(
    new CustomEvent("shell:cust-event-data-updated", {
      detail: data
    })
  );
};

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    userConfig: userConfigSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware() // Redux Thunk is included by default in Redux Toolkit
});