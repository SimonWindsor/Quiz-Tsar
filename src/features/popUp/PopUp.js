import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, resetGame, selectNumQuestions } from '../game/gameSlice.js';
import { resetQuiz, nextQuestion, resetStatusAndError, selectCurrentQuestion, selectError } from "../quiz/quizSlice.js";
import { selectPopUpType, hidePopUp, selectPopUpToggle } from "./popUpSlice.js";

import './PopUp.css';

import arrowPicture from '../../assets/arrow.png';

/* This contains a pop up message and its contents. Pop up messages contain error
  messages, affirm a correct or incorrect answer to a trivia question or confirm
  whether or not to exit from game or game selection screen.
*/
export function PopUp() {
  const popUpType = useSelector(selectPopUpType);
  const popUpShowing = useSelector(selectPopUpToggle);
  const finalQuestion = useSelector(selectCurrentQuestion) === useSelector(selectNumQuestions) - 1;
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  // Determines the pop up type- exit, correct, incorrect or error
  const getPopUp = () => {
    // If the pop up toggle in popUpSlice.js is false, no pop up should show
    if (!popUpShowing) {
      return;
    }
    switch (popUpType.toLowerCase()) {
      // If an "exit" button is clicked, this pop up confirms whether to exit or not.
      case 'exit':
        return (
          <div className="exit popup">
            <h3>Are you sure you want to exit?</h3>
            <span>
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
            </span>
          </div>
        );
      // Affirms a correct answer.
      case 'correct':
        return (
          <div className="correct popup">
            <h3>Correct!</h3>
            <button
              className='arrow-btn'
              aria-label='continue'
              onClick={() => afterAnswered()}
            >
              <img className="arrow" alt="continue" src={arrowPicture} />
            </button>
          </div>
        );
      // Affirms an incorrect answer.
      case 'incorrect':
        return (
          <div className="incorrect popup">
            <h3>Incorrect!</h3>
            <button
              className="arrow-btn"
              aria-label="continue"
              onClick={() => afterAnswered()}
            >
              <img className="arrow" alt="continue" src={arrowPicture} />
            </button>
          </div>
        );
      // In case of error, this pop up should contain the error message.
      case 'error':
        return (
          <div className="error popup">
            <h3>Error:</h3>
            <h4>{error}</h4>
            <button
              className="back-arrow-btn"
              aria-label="go back"
              onClick={() => {
                dispatch(resetStatusAndError());
                dispatch(hidePopUp());
              }}
            >
              <img className="back arrow" alt="go back" src={arrowPicture} />
            </button>
          </div>
        );
      // Default pop up, something is wrong if this shows.
      default:
        return (
          <div className="default popup">
            <h3>Unknown PopUp Type</h3>
            <h4>Something might be wrong</h4>
            <button onClick={() => dispatch(hidePopUp())} >
              OK
            </button>
          </div>
        );
    }
  }

  /* For "correct" or "incorrect" pop ups. If the user is answering their final
    question in a quiz, then the game stage should transition from "quiz" to 
    "showing-quiz-results" were the user sees their final score.
  */
  const afterAnswered = () => {
    if (finalQuestion) {
      dispatch(hidePopUp());
      dispatch(setGameStage('showing-quiz-results'));
    } else {
      dispatch(hidePopUp());
      dispatch(nextQuestion());
    }
  }

  /* If game is exited, app state should reset and the user will be directed
    to the start of the app.
  */
  const exitGame = () => {
    dispatch(resetGame());
    dispatch(resetQuiz());
    dispatch(setGameStage('start'));
  }
  
  // This will deploy a pop up to the DOM.
  return (
    getPopUp()
  );
}