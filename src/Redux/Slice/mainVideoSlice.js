import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const mainVideoSlice = createSlice({
  name: 'mainVideo',
  initialState,
  reducers: {
   
    addVideo: (state,action) => {
      state.data = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addVideo } = mainVideoSlice.actions

export default mainVideoSlice.reducer