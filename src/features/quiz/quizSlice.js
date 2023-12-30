import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  type: '',
  questions: {}
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    resetQuiz: () => {
      return initialState;
    }
  }
});

export const { setCategory, setType, setQuestions, resetQuiz } = quizSlice.actions;
export const selectCategory = (state) => state.quiz.category;
export const selectType = (state) => state.quiz.type;
export const selectQuestions = (state) => state.quiz.questions;
export default quizSlice.reducer;