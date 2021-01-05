import React, { useState } from 'react';
import './App.css';
import Board from './components/board/Board';
import { TopMenu } from './components/menu/TopMenu';

function App() {
  const [interval, setInterval] = useState<number>(100);
  const [isStopped, setIsStopped] = useState(true);

  return (
    <div>
      <TopMenu isStopped={isStopped} toggleStopped={() => { setIsStopped(!isStopped) }} setInterval={(newInterval) => setInterval(newInterval)} />
      <Board size={100} interval={interval} isStopped={isStopped} />
    </div>
  );
}

export default App;
