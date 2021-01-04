import React, { useState } from 'react';
import './App.css';
import Board from './components/board/Board';
import { TopMenu } from './components/menu/TopMenu';

function App() {

  return (
    <div>
      <TopMenu />
      <Board size={100} interval={500} />
    </div>
  );
}

export default App;
