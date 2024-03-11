import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "income",
  initialState: {
    data:null
  },
  reducers: {
    setData : (state,action)=>{
        state.data = action.payload
    }
 
  },
});

export const { singOutSuccess, setUserData } = incomeSlice.actions;

export default incomeSlice.reducer;
