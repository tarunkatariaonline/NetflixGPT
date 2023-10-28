import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './Slice/userInfoSlice'
import mainVideoReducer from './Slice/mainVideoSlice'
import movieReducer from './Slice/movieSlice'
import popularMovieReducer from './Slice/popularMovieSlice'
import topRatedMovieReducer from './Slice/topRatedMovieSlice'
export const store = configureStore({
  reducer: {
    userInfo:userInfoReducer,
    mainVideo:mainVideoReducer,
    movie:movieReducer,
    popularMovies:popularMovieReducer,
    topRatedMovies:topRatedMovieReducer
    
    
  },
})