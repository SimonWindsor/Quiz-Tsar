import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameStage: 'start',
  numQuizzes: 5,
  numQuestions: 10,
  difficulty: '',
  currentGame: 0,
  resultsByQuiz: [],
  popUpShowing: false
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
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
    incrementCurrentGame: (state) => {
      state.currentGame++;
    },
    addResult: (state, action) => {
      state.resultsByQuiz.push(action.payload);
    },
    togglePopUp: (state, action) => {
      state.popUpShowing = !state.popUpShowing;
    },
    resetGame: () => {
      return initialState;
    }
  }
});

export const {
  setGameStage, 
  setNumQuizzes, 
  setNumQuestions, 
  setDifficulty, 
  incrementCurrentGame,
  addResult,
  togglePopUp,
  resetGame
} = gameSlice.actions;
export const selectGameStage = (state) => state.game.gameStage; 
export const selectNumQuizzes = (state) => state.game.numQuizzes;
export const selectNumQuestions = (state) => state.game.numQuestions;
export const selectDifficulty = (state) => state.game.difficulty;
export const selectCurrentGame = (state)=> state.game.currentGame;
export const selectResultsByQuiz = (state) => state.game.resultsByQuiz;
export const selectPopUpShowing = (state) => state.game.popUpShowing;
export default gameSlice.reducer;