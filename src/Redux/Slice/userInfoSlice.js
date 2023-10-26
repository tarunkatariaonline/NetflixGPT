import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState,
  reducers: {
    addUserDetails: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.data = action.payload;
    },
    removeUserDetails: (state) => {
      state.data = null;
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { addUserDetails,removeUserDetails } = userInfoSlice.actions

export default userInfoSlice.reducer