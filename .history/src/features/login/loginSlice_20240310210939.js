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

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer