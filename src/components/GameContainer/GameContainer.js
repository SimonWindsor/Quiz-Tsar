import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, selectGameStage } from '../../features/game/gameSlice.js';
import { GameCreator } from '../GameCreator/GameCreator.js';
import { QuizOptionSelector } from '../QuizOptionSelector/QuizOptionSelector.js';
import { Quiz } from '../../features/quiz/Quiz.js';
import { ResultsScreen } from '../ResultsScreen/ResultsScreen.js'
import { FinalResults } from '../FinalResults/FinalResults.js';
import { PopUp } from '../PopUp/PopUp.js';

/* This component acts as a container for whatever 'stage' the program is in.
  For example, creating a game, playing the quiz, showing quiz results. */
export function GameContainer() {
  const gameStage = useSelector(selectGameStage);
  const dispatch = useDispatch();
  
  const currentStage = () => {
    switch (gameStage) {
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
      case 'selecting-quiz':
        return (
          <QuizOptionSelector />
        );
      case 'playing-quiz':
        return (
          <Quiz />
        );
      case 'showing-quiz-results':
        return (
          <ResultsScreen />
        );
      case 'showing-final-results':
        return (
          <FinalResults />
        );
      default:
        alert('Invalid Game Stage');
    }
  }

  return (
    <div>
      {currentStage()}
      <PopUp/>
    </div>
  );
}