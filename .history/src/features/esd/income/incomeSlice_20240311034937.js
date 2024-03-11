import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "income",
  initialState: {
    data:null,
    error:false
  },
  reducers: {
    setData : (state,action)=>{
        state.data = action.payload
    }
    setError : (state,action)=>{
        state.error = action.payload
    }
 
  },
});

export const {setData } = incomeSlice.actions;

export default incomeSlice.reducer;
