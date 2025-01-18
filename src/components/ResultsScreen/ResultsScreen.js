import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setGameStage,
  selectNumQuestions,
  resetGame } from "../../features/game/gameSlice";
import { selectScore, resetQuiz } from "../../features/quiz/quizSlice";

import './ResultsScreen.css';

// Where user sees their final score
export function ResultsScreen () {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const numQuestions = useSelector(selectNumQuestions);

  return (
    <div id="results-screen">
      <h2>Score for this Quiz: {score}/{numQuestions}</h2>
      <button
        id="finish-btn"
        aria-label="Finish Button"
        onClick={() => {
          // Resets relevant parts of state and returns to opening screen.
          dispatch(resetGame());
          dispatch(resetQuiz());
          dispatch(setGameStage('start'));
        }}
      >
        FINISH
      </button>
    </div>
  )
}