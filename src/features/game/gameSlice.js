import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameStage: 'start',
    numQuizzes: 0,
    numQuestions: 0,
    difficulty: '',
  },
  reducers: {
    setGameStage: (state, action) => {
      state.gameStage = action.payload;
    },
    setNumQuizzes: (state, action) => {
      state.numQuizzes = action.payload;
    },
    setNumQuesions: (state, action) => {
      state.numQuestions = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    }
  }
});

export const { setGameStage, setNumQuizzes, setNumQuesions, setDifficulty } = gameSlice.actions;
export const selectGameStage = (state) => state.game.gameStage; 
export const selectNumQuizzes = (state) => state.game.numQuizzes;
export const selectNumQuestions = (state) => state.game.numQuestions;
export const selectDifficulty = (state) => state.game.difficulty;
export default gameSlice.reducer;