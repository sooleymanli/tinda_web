import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/login/loginSlice'
import incomeSlice from '../'

export default configureStore({
  reducer: {loginSlice,incomeSlice},
})