import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setGameStage,
  selectNumQuestions,
  selectScore, 
  resetGame } from "../../features/game/gameSlice";
import { resetQuiz } from "../../features/quiz/quizSlice";

export function ResultsScreen () {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const numQuestions = useSelector(selectNumQuestions);

  return (
    <div>
      <h3>Score for this Quiz: {score}/{numQuestions}</h3>
      <button
        className="green-btn"
        aria-label="Finish Button"
        onClick={() => {
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