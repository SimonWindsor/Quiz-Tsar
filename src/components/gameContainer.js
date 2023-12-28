import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameStage, selectGameStage } from '../features/game/gameSlice.js';
import { GameCreator } from './GameCreator.js';
import { QuizOptionSelector } from './QuizOptionSelector.js';
import { QuizScreen } from './QuizScreen.js';
import { ResultsScreen } from './ResultsScreen.js'
import { FinalResults } from './FinalResults.js';

export function GameContainer() {
  const gameStage = useSelector(selectGameStage);
  const dispatch = useDispatch();
  
  const currentStage = () => {
    switch (gameStage) {
      case 'start':
        return (
          <button onClick={startGame}>
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

  const startGame = () => {
    dispatch(setGameStage('creating-game'));
  }

  return (
    currentStage()
  );
}

//{onClick={dispatch(setGameStage('creating-game'))}}