import { configureStore } from "@reduxjs/toolkit";
 

export const store = configureStore({
  reducer: {
    authReg: require("./ThunkServices/RegistrationSlice").default   ,
    loginUserAuth: require("./ThunkServices/authshellSlice").default 
  }
});