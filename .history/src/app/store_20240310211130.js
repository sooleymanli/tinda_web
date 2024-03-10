import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './'

export default configureStore({
  reducer: {loginSlice},
})