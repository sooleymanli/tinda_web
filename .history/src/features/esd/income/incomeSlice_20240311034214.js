import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "income",
  initialState: {
    data:null
  },
  reducers: {
    setData : (state)
 
  },
});

export const { singOutSuccess, setUserData } = incomeSlice.actions;

export default incomeSlice.reducer;
