import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, togglePopUp, resetGame, selectPopUpShowing } from '../../features/game/gameSlice.js';

export function PopUp() {
  const popUpShowing = useSelector(selectPopUpShowing);
  const dispatch = useDispatch();

  const getPopUp = () => {
    if (popUpShowing) {
      return (
        <div>
          <h3>Are you sure you want to exit?</h3>
          <button
            className="red-btn"
            aria-label="Yes Button"
            onClick={exitGame}
          >
            YES
          </button>
          <button
            className="green-btn"
            aria-label="No Button"
            onClick={() => dispatch(togglePopUp())}
          >
            NO
          </button>
        </div>
      );
    }
    else {
      return;
    }
  }

  const exitGame = () => {
    dispatch(resetGame())
    dispatch(setGameStage('start'));
  }
  
  return (
    getPopUp()
  );
}