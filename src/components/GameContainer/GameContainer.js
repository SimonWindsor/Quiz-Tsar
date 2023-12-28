import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, selectGameStage } from '../../features/game/gameSlice.js';
import { GameCreator } from '../GameCreator/GameCreator.js';
import { QuizOptionSelector } from '../QuizOptionSelector/QuizOptionSelector.js';
import { QuizScreen } from '../QuizScreen/QuizScreen.js';
import { ResultsScreen } from '../ResultsScreen/ResultsScreen.js'
import { FinalResults } from '../FinalResults/FinalResults.js';

/* This component acts as a container for whatever 'stage' the program is in.
  For example, creating a game, playing the quiz, showing quiz results. */
export function GameContainer() {
  const gameStage = useSelector(selectGameStage);
  const dispatch = useDispatch();
  
  const currentStage = () => {
    switch (gameStage) {
      case 'start':
        return (
          <button onClick={() => dispatch(setGameStage('creating-game'))}>
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
          <QuizScreen />
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
    currentStage()
  );
}

//{onClick={dispatch(setGameStage('creating-game'))}}