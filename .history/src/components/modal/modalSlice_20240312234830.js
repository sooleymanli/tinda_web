import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    data:null,
    error:false,
    isLoading:false
  },
  reducers: {
    setData : (state,action)=>{
        state.data = action.payload
    },
    setError : (state,action)=>{
        state.error = action.payload
    },
    setIsLoading:(state,action)=>{
      state.isLoading=action.payload
    }
 
  },
});

export const {setData,setError,setIsLoading } = modalSlice.actions;

export default modalSlice.reducer;
