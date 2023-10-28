import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './Slice/userInfoSlice'
import mainVideoReducer from './Slice/mainVideoSlice'
export const store = configureStore({
  reducer: {
    userInfo:userInfoReducer,
    mainVideo:mainVideoReducer
  },
})