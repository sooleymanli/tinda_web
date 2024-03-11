import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "income",
  initialState: {
    isLoggedIn: false,
    userData: null,
  },
  reducers: {
 
  },
});

export const { singOutSuccess, setUserData } = loginSlice.actions;

export default loginSlice.reducer;
