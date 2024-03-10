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

        
      }
  

  },
})

export const { singInSucces, singOutSucces } = loginSlice.actions

export default loginSlice.reducer