import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/login/loginSlice'
import incomeSlice from '../features/esd/income/incomeSlice'
import outGoingSlice from '../features/esd/income/incomeSlice'

export default configureStore({
  reducer: {loginSlice,incomeSlice,outGoingSlice},
})