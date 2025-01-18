import React from 'react';
import { GameContainer } from './components/GameContainer/GameContainer.js';

import './App.css';

// This contains the main container for the game as well as the heading.
function App() {
  return (
    <div id="app">
      <h1>Quiz-Tsar</h1>
      <GameContainer />
    </div>
  );
}

export default App;
