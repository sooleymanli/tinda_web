import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/login/loginSlice'
import incomeSlice from '../features/esd/income/'

export default configureStore({
  reducer: {loginSlice,incomeSlice},
})