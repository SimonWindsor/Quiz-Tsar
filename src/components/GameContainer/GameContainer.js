import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, selectGameStage } from '../../features/game/gameSlice.js';
import { GameCreator } from '../GameCreator/GameCreator.js';
import { Quiz } from '../../features/quiz/Quiz.js';
import { ResultsScreen } from '../ResultsScreen/ResultsScreen.js'
import { PopUp } from '../../features/popUp/PopUp.js'

import tsarPicture from '../../assets/tsar.webp';

/* This component acts as a container for whatever 'stage' the program is in.
  For example, creating a game, playing the quiz, showing quiz results. */
export function GameContainer() {
  const gameStage = useSelector(selectGameStage);
  const dispatch = useDispatch();
  
  /* Determines what to render based on different 'stages' off the app, including selecting quiz options, or playing */
  const currentStage = () => {
    switch (gameStage) {
      // When app opens or resets. This is the opening screen.
      case 'start':
        return (
          <div id="start">
            <img id="tsar" alt="Traditional Russian Tsar" src={tsarPicture}/>
            <button
              id="begin-btn"
              aria-label="Begin Playing"
              onClick={() => dispatch(setGameStage('creating-game'))}
            >
              BEGIN
            </button>
          </div>
        );
      // The game options select screen.
      case 'creating-game':
        return (
          <GameCreator />
        );
      // The playable quiz.
      case 'playing-quiz':
        return (
          <Quiz />
        );
      // Final score is displayed.
      case 'showing-quiz-results':
        return (
          <ResultsScreen />
        );
      // Something is wrong if this alert shows.
      default:
        alert('Invalid Game Stage');
    }
  }

  return (
    <div id="game-container">
      {currentStage() /* The current stage will render the relevant component. */}
      <PopUp/> {/* shows a popup only if popUpShowing in gameSlice is true. */}
    </div>
  );
}