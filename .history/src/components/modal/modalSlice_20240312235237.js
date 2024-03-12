import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visible:true,
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

export const {setVisible,setHeader,setContent } = modalSlice.actions;

export default modalSlice.reducer;
