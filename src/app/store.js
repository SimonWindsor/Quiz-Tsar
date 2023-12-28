import { configureStore } from '@reduxjs/toolkit';
import { gameSlice } from '../features/game/gameSlice';
import { quizSlice } from '../features/quiz/quizSlice';
import { resultsSlice } from '../features/results/resultsSlice';

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    quiz: quizSlice.reducer,
    results: resultsSlice.reducer
  }
});
