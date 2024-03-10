import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/login/'

export default configureStore({
  reducer: {loginSlice},
})