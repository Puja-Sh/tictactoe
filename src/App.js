import React, { useState } from 'react';

import './styles/root.scss';
import Board from './components/Board';
import { calculateWinner } from './helper/winnerLogic';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `${isXnext ? 'X' : 'O'}'s turn`;
  console.log(winner);

  const handleSquareClick = position => {
    // Once clicked or winner=true do not change
    if (board[position] || winner) return;

    // when click set array[position] with X or O
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXnext ? 'X' : 'O';
        }
        return square;
      });
    });

    // Alternating X and O
    setIsXnext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
