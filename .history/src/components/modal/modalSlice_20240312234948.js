import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visible:false,
    header:null,
    content:null
  },
  reducers: {
    setVisible : (state,action)=>{
        state.visible = action.payload
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
