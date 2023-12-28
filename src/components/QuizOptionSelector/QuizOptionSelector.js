import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage } from "../../features/game/gameSlice";

export function QuizOptionSelector() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Select Quiz Options</h2>
      <label for="category">
        Category:
      </label>
      {/* <select id="category" onChange={(e) => dispatch(setDifficulty(e.target.value))}>
        <option value="">Any</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <label for="type">
        Type:
      </label>
      <select id="type" onChange={(e) => dispatch(setDifficulty(e.target.value))}>
        <option value="">Any</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select> */}
      <button
        className="exit-btn"
        onClick={() => dispatch(setGameStage('start'))}
      >
        EXIT
      </button>
      <button onClick={() => dispatch(setGameStage('selecting-quiz'))}>
        START QUIZ
      </button>
    </div>
  )
}