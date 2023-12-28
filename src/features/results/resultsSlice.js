import { createSlice } from '@reduxjs/toolkit';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    resultsByQuiz: []
  },
  reducers: {
    addResult: (state, action) => {
      state.resultsByQuiz.push(action.payload);
    }
  }
});

export const { addResult } = resultsSlice.actions;
export const selectResultsByQuiz = (state) => resultsSlice.state.resultsByQuiz;
export default resultsSlice.reducer;