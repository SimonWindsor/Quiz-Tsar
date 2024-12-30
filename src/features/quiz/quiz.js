import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, togglePopUp, increaseScore, selectNumQuestions } from "../../features/game/gameSlice";
import { selectQuestions, nextQuestion, selectCurrentQuestion } from './quizSlice.js';
import './Quiz.css'

export function Quiz() {
  const questions = useSelector(selectQuestions);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const question = questions[currentQuestion];
  const totalQuestions = useSelector(selectNumQuestions);
  const dispatch = useDispatch();

  // Decode HTML entities using a textarea
const decode = (text) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text; // Set the encoded string as the inner HTML
  return textarea.value; // Get the decoded value
};

  const showAnswerOptions = () => {
    // Put correnct and incorrect answers together in an array
    const answers = [...question.incorrect_answers];
    answers.push(question.correct_answer);
    const reorderedAnswers = [];

    // Randomise order of answers so correct answer is not on the end all the time
    while (answers.length > 0) {
      const remove = Math.floor(Math.random() * answers.length);
      reorderedAnswers.push(answers[remove]);
      answers.splice(remove, 1);
    }

    return reorderedAnswers.map(answer => {
      return (
        <button
          className="answer-btn"
          aria-label={decode(answer)}
          onClick={() => handleAnswer(answer)}
        >
          {decode(answer)}
        </button>
      )
    });
  }

  const handleAnswer = (answer) => {
    if (answer === question.correct_answer) {
      dispatch(increaseScore());
    }
    if (currentQuestion === totalQuestions - 1) {
      dispatch(setGameStage('showing-quiz-results'));
      return;
    }
    dispatch(nextQuestion());
  }

  return (
    <div>
      <h2>{`Question ${currentQuestion + 1}: ${decode(question.question)}`}</h2>
      {showAnswerOptions()}
      <button
        className="exit-btn"
        aria-label="Exit Button"
        onClick={() => dispatch(togglePopUp())}
      >
        EXIT
      </button>
    </div>
  )
}