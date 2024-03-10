import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    singInSucces: (state) => {
      
      state.isLoggedIn =true
    },
    singOutSucces: (state) => {
      
        state.isLoggedIn =false
      },
  

  },
})

export const { singInSucces, singOutSucces } = counterSlice.actions

export default counterSlice.reducer