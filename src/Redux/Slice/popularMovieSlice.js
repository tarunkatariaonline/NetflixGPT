import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const popularMovieSlice = createSlice({
  name: 'popularMovie',
  initialState,
  reducers: {
   
    addpopularMovie: (state,action) => {
      state.data = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addpopularMovie } = popularMovieSlice.actions

export default popularMovieSlice.reducer