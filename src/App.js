import React, { useState } from 'react';

import './styles/root.scss';
import Board from './components/Board';
import { calculateWinner } from './helper/winnerLogic';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];
const App = () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winnerSquares } = calculateWinner(current.board);

  console.log(winnerSquares);
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

  const moveTo = move => {
    setCurrentMove(move);
  };
  const resetGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winnerSquares={winnerSquares}
      />
      <button type="button" onClick={resetGame}>
        Start new game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
