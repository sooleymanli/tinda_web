import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visible:false,
    header:null,
    content:null
  },
  reducers: {
    showModal : (state,action)=>{
        state.visible = action.payload
    },
    hideModal : (state,action)
    setHeader : (state,action)=>{
        state.header = action.payload
    },
    setContent:(state,action)=>{
      state.content=action.payload
    }
 
  },
});

export const {showModal,setHeader,setContent } = modalSlice.actions;

export default modalSlice.reducer;
