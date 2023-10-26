import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './Slice/userInfoSlice'
export const store = configureStore({
  reducer: {
    userInfo:userInfoReducer
  },
})