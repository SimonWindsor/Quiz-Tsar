import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  currentQuestion: 0,
  status: '',
  error: ''
}

/* After an API request, if the reponse code is not 0 an error message must returned.
  Array position 0 is 'null' as 0 means the questions from Open Trivia Database have 
  been properly acquired. 3 or 4 are unlikely as session tokens are not being used.
*/
const responseCodeMessages = [
  null,
  'No results - maybe lower number of questions',
  'Invalid parameters',
  'Token not found',
  'Token is empty',
  'Rate limit reached - You are probably starting new games too quickly'
]

export const getQuestions = createAsyncThunk (
  'quiz/getQuestions',
  async ({ numQuestions, difficulty, category, type }, { rejectWithValue }) => {
    const APIrequest = `https://opentdb.com/api.php?${new URLSearchParams({
      amount: numQuestions,
      difficulty,
      category,
      type
    }).toString()}`;
    
    try {
      const response = await fetch(APIrequest);
      const jsonResponse =  await response.json();
      
      if (jsonResponse.response_code !== 0) {
        console.error(`Response code: ${jsonResponse.response_code}`);
        throw new Error(responseCodeMessages[jsonResponse.response_code]);
      }

      return jsonResponse.results;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
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
    },
    resetStatusAndError: (state) => {
      state.status = ''; 
      state.error = '';
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
      .addCase(getQuestions.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      })
  }
});

export const { nextQuestion, resetQuiz, resetStatusAndError } = quizSlice.actions;
export const selectQuestions = (state) => state.quiz.questions;
export const selectCurrentQuestion = (state) => state.quiz.currentQuestion;
export const selectStatus = (state) => state.quiz.status;
export const selectError = (state) => state.quiz.error;

export default quizSlice.reducer;