import { configureStore } from '@reduxjs/toolkit';
import { gameSlice } from '../features/game/gameSlice';
import { quizSlice } from '../features/quiz/quizSlice';

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    quiz: quizSlice.reducer
  }
});
