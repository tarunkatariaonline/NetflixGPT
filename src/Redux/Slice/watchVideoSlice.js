import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const watchVideoSlice = createSlice({
  name: 'watchVideo',
  initialState,
  reducers: {
   
    addwatchVideo: (state,action) => {
      state.data = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addwatchVideo } = watchVideoSlice.actions

export default watchVideoSlice.reducer