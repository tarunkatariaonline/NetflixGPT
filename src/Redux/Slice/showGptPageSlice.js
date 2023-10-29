import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:false,
  searchSuggestionTextList:null,
  searchMovieResult:null
}

export const showGptPageSlice = createSlice({
  name: 'showGptPage',
  initialState,
  reducers: {
   
    setShowGptPage: (state) => {
      state.value = !(state.value);
    },

    setSuggestionMovies:(state,action)=>{
      state.searchSuggestionTextList = action.payload.searchSuggestionTextList;
      state.searchMovieResult = action.payload.searchMovieResult;
    }


    
  },
})

// Action creators are generated for each case reducer function
export const { setShowGptPage,setSuggestionMovies } = showGptPageSlice.actions

export default showGptPageSlice.reducer