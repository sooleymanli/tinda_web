import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "income",
  initialState: {
   
  },
  reducers: {
 
  },
});

export const { singOutSuccess, setUserData } = incomeSlice.actions;

export default incomeSlice.reducer;
