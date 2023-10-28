import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   
    addMovie: (state,action) => {
      state.data = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addMovie } = movieSlice.actions

export default movieSlice.reducer