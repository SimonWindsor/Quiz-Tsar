import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  currentQuestion: 0,
  status: ''
}

export const getQuestions = createAsyncThunk (
  'quiz/getQuestions',
  async ({numQuestions, difficulty, category, type}) => {
    const APIrequest = `
      https://opentdb.com/api.php?amount=${numQuestions}&
      difficulty=${difficulty}&
      category=${category}&
      type=${type}
    `
    try {
      const response = await fetch(APIrequest);
      const jsonResponse =  await response.json();
      return jsonResponse.results;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
)

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      state.currentQuestion++;
    },
    resetQuiz: (state) => {
      Object.assign(state, initialState);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.status ='idle';
        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state) => {
        state.status = 'error';
      })
  }
});

export const { nextQuestion, resetQuiz } = quizSlice.actions;
export const selectQuestions = (state) => state.quiz.questions;
export const selectCurrentQuestion = (state) => state.quiz.currentQuestion;
export const selectStatus = (state) => state.quiz.questions;

export default quizSlice.reducer;