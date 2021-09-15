import React, { useState } from 'react';

import './styles/root.scss';
import Board from './components/Board';
import { calculateWinner } from './helper/winnerLogic';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `${current.isXNext ? 'X' : 'O'}'s turn`;

  const handleSquareClick = position => {
    // Once clicked or winner=true do not change
    if (current.board[position] || winner) return;

    // when click set array[position] with X or O
    setHistory(prev => {
      const lastHistory = prev[prev.length - 1];

      const newBoard = lastHistory.board.map((square, pos) => {
        if (pos === position) {
          return lastHistory.isXNext ? 'X' : 'O';
        }
        return square;
      });

      // concating history and alternating X and O
      return prev.concat({ board: newBoard, isXNext: !lastHistory.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
