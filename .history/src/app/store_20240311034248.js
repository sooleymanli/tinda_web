import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/login/loginSlice'
import 

export default configureStore({
  reducer: {loginSlice,incomeSlice},
})