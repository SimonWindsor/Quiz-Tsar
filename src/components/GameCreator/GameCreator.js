import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setGameStage,
  setNumQuizzes,
  setNumQuestions, 
  setDifficulty,
  selectNumQuizzes,
  selectNumQuestions,
} from '../../features/game/gameSlice.js';

export function GameCreator() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Start a Game</h2>
      <label for="num-quizzes">
        Quizzes per Game:
      </label>
      <input
        id="num-quizzes"
        type="number"
        min="1"
        max="10"
        step="1"
        value={useSelector(selectNumQuizzes)}
        onChange={(e) => dispatch(setNumQuizzes(e.target.value))}
      />
      <label for="num-questions">
        Questions per Quiz:
      </label>
      <input
        id="num-questions"
        type="number"
        min="1"
        max="50"
        step="1"
        value={useSelector(selectNumQuestions)}
        onChange={(e) => dispatch(setNumQuestions(e.target.value))}
      />
      <label for="difficulty">
        Difficulty:
      </label>
      <select id="difficulty" onChange={(e) => dispatch(setDifficulty(e.target.value))}>
        <option value="">Any</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button
        className="exit-btn"
        onClick={() => dispatch(setGameStage('start'))}
      >
        EXIT
      </button>
      <button onClick={() => dispatch(setGameStage('selecting-quiz'))}>
        PLAY
      </button>
    </div>
  );
}