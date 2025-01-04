import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increaseScore, selectNumQuestions } from "../../features/game/gameSlice";
import { selectQuestions, selectCurrentQuestion } from './quizSlice.js';
import { setPopUpType } from "../popUp/popUpSlice.js";
import './Quiz.css'

export function Quiz() {
  const questions = useSelector(selectQuestions);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const totalQuestions = useSelector(selectNumQuestions);

  const question = questions[currentQuestion];

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

    // New array for storing shuffled answers
    const reorderedAnswers = [];

    // Randomise order of answers so correct answer is not on the end all the time
    while (answers.length > 0) {
      const remove = Math.floor(Math.random() * answers.length);
      reorderedAnswers.push(answers[remove]);
      answers.splice(remove, 1);
    }

    // Display shuffled array of answers as buttons to select
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

  // Determines outcome after an answer has been selected
  const handleAnswer = (answer) => {
    if (answer === question.correct_answer) {
      dispatch(increaseScore());
      dispatch(setPopUpType('correct'));
    } else {
      dispatch(setPopUpType('incorrect'));
    }
  }

  return (
    <div>
      <h2>{`Question ${currentQuestion + 1}: ${decode(question.question)}`}</h2>
      {showAnswerOptions()}
      <button
        className="exit-btn"
        aria-label="Exit Button"
        onClick={() => {
          dispatch(setPopUpType('exit'));
        }}
      >
        EXIT
      </button>
      <div className="progress">
        <h3>{`Current Question: ${currentQuestion + 1}/${totalQuestions}`}</h3>
      </div>
    </div>
  )
}