import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, resetGame, selectNumQuestions } from '../game/gameSlice.js';
import { resetQuiz, nextQuestion, selectCurrentQuestion } from "../quiz/quizSlice.js";
import { selectPopUpType, hidePopUp, selectPopUpToggle } from "./popUpSlice.js";

export function PopUp() {
  const popUpType = useSelector(selectPopUpType);
  const popUpShowing = useSelector(selectPopUpToggle);
  const finalQuestion = useSelector(selectCurrentQuestion) === useSelector(selectNumQuestions) - 1;
  const dispatch = useDispatch();

  const getPopUp = () => {
    if (!popUpShowing) {
      return;
    }
    switch (popUpType) {
      case 'exit':
        return (
          <div>
            <h3>Are you sure you want to exit?</h3>
            <button
              className="red-btn"
              aria-label="Yes Button"
              onClick={() => {
                exitGame();
                dispatch(hidePopUp());
              }}
            >
              YES
            </button>
            <button
              className="green-btn"
              aria-label="No Button"
              onClick={() => dispatch(hidePopUp())}
            >
              NO
            </button>
          </div>
        );
      case 'correct':
        return (
          <div>
            <h3>Correct!</h3>
            <button
              className='arrow-btn'
              aria-label='continue'
              onClick={() => afterAnswered()}
            >
              Continue
            </button>
          </div>
        );
      case 'incorrect':
        return (
          <div>
            <h3>Incorrect!</h3>
            <button
              className='arrow-btn'
              aria-label='continue'
              onClick={() => afterAnswered()}
            >
              Continue
            </button>
          </div>
        );
    }
  }

  const afterAnswered = () => {
    if (finalQuestion) {
      dispatch(hidePopUp());
      dispatch(setGameStage('showing-quiz-results'));
      return;
    }

    dispatch(hidePopUp());
    dispatch(nextQuestion());
  }

  const exitGame = () => {
    dispatch(resetGame());
    dispatch(resetQuiz());
    dispatch(setGameStage('start'));
  }
  
  return (
    getPopUp()
  );
}