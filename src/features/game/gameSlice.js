import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    numQuizzes: 0,
    numQuestions: 0,
    difficulty: '',
  },
  reducers: {
    setNumQuizzes: (state, action) => {
      state.quiz.numQuizzes = action.payload;
    },
    setNumQuesions: (state, action) => {
      state.quiz.numQuestions = action.payload;
    },
    setDifficulty: (state, action) => {
      state.quiz.difficulty = action.payload;
    }
  }
});

export const { setNumQuizzes, setNumQuesions, setDifficulty } = gameSlice.actions;
export const selectNumQuizzes = (state) => state.game.numQuizzes;
export const selectNumQuestions = (state) => state.game.numQuestions;
export const selectDifficulty = (state) => state.game.difficulty;
export default gameSlice.reducer;