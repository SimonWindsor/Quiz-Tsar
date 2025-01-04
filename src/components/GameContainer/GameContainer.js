import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, selectGameStage } from '../../features/game/gameSlice.js';
import { GameCreator } from '../GameCreator/GameCreator.js';
import { Quiz } from '../../features/quiz/Quiz.js';
import { ResultsScreen } from '../ResultsScreen/ResultsScreen.js'
import { PopUp } from '../../features/popUp/PopUp.js'

/* This component acts as a container for whatever 'stage' the program is in.
  For example, creating a game, playing the quiz, showing quiz results. */
export function GameContainer() {
  const gameStage = useSelector(selectGameStage);
  const dispatch = useDispatch();
  
  /* Determines what to render based on different 'stages' off the app, including selecting quiz options, or playing */
  const currentStage = () => {
    switch (gameStage) {
      /* When app opens or resets */
      case 'start':
        return (
          <button
            aria-label="Begin Playing"
            onClick={() => dispatch(setGameStage('creating-game'))}
          >
            BEGIN
          </button>
        );
      case 'creating-game':
        return (
          <GameCreator />
        );
      case 'playing-quiz':
        return (
          <Quiz />
        );
      case 'showing-quiz-results':
        return (
          <ResultsScreen />
        );
      default:
        alert('Invalid Game Stage');
    }
  }

  return (
    <div>
      {currentStage()}
      <PopUp/> {/* shows a popup only if popUpShowing in gameSlice is true */}
    </div>
  );
}