import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/login/loginSlice'
import incomeSlice from '../features/'

export default configureStore({
  reducer: {loginSlice,incomeSlice},
})