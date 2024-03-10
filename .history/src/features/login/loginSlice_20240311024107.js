import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    userData:null
  },
  reducers: {
    singInSucces: (state) => {
      state.isLoggedIn =true
    },
    singOutSucces: (state) => {
        state.isLoggedIn =false
      },
      setUserData : (state,action)=>{
        state.isLoggedIn =true

        state.userData = action.payload
      }
  

  },
})

export const { singInSucces, singOutSucces,setUserData } = loginSlice.actions

export default loginSlice.reducer