import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const topRatedMovieSlice = createSlice({
  name: 'topRatedMovie',
  initialState,
  reducers: {
   
    addtopRatedMovie: (state,action) => {
      state.data = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addtopRatedMovie } = topRatedMovieSlice.actions

export default topRatedMovieSlice.reducer