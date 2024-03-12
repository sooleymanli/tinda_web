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
    setHeader : (state,action)=>{
        state.header = action.payload
    },
    setContent:(state,action)=>{
      state.content=action.payload
    }
 
  },
});

export const {setVisible,setError,setIsLoading } = modalSlice.actions;

export default modalSlice.reducer;
