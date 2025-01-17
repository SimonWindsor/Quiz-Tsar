import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameStage: 'start',
  numQuestions: 10,
  difficulty: '',
  category: '',
  type: '',
  score: 0
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameStage: (state, action) => {
      state.gameStage = action.payload;
    },
    setNumQuestions: (state, action) => {
      if (action.payload > 50) {
        state.numQuestions = 50;
      } else if (action.payload < 1) {
        state.numQuestions = 1
      } else {
        state.numQuestions = action.payload;
      }
    },
    decreaseNumQuestions: (state) => {
      if (state.numQuestions > 1)
        state.numQuestions--;
    },
    increaseNumQuestions: (state) => {
      if (state.numQuestions < 50)
        state.numQuestions++;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setType: (state,action) => { 
      state.type = action.payload;
    },
    increaseScore: (state) => {
      state.score++;
    },
    togglePopUp: (state) => {
      state.popUpShowing = !state.popUpShowing;
    },
    resetGame: (state) => {
      Object.assign(state, initialState);
    }
  }
});

export const {
  setGameStage, 
  setNumQuestions,
  decreaseNumQuestions,
  increaseNumQuestions, 
  setDifficulty,
  setCategory,
  setType,
  increaseScore,
  resetGame
} = gameSlice.actions;

export const selectGameStage = (state) => state.game.gameStage;
export const selectNumQuestions = (state) => state.game.numQuestions;
export const selectDifficulty = (state) => state.game.difficulty;
export const selectCategory = (state) => state.game.category;
export const selectType = (state) => state.game.type;
export const selectScore = (state) => state.game.score

export default gameSlice.reducer;