import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameStage: 'start',
    numQuizzes: 5,
    numQuestions: 10,
    difficulty: '',
    popUpShowing: false
  },
  reducers: {
    setGameStage: (state, action) => {
      state.gameStage = action.payload;
    },
    setNumQuizzes: (state, action) => {
      state.numQuizzes = action.payload;
    },
    setNumQuestions: (state, action) => {
      state.numQuestions = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    togglePopUp: (state, action) => {
      state.popUpShowing = !state.popUpShowing;
    }
  }
});

export const { setGameStage, setNumQuizzes, setNumQuestions, setDifficulty, togglePopUp } = gameSlice.actions;
export const selectGameStage = (state) => state.game.gameStage; 
export const selectNumQuizzes = (state) => state.game.numQuizzes;
export const selectNumQuestions = (state) => state.game.numQuestions;
export const selectDifficulty = (state) => state.game.difficulty;
export const selectPopUpShowing = (state) => state.game.popUpShowing;
export default gameSlice.reducer;