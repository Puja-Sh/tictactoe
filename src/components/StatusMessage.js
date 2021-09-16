import React from 'react';

function StatusMessage({ winner, current }) {
  const noMoveLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && noMoveLeft && 'X and O tied!'}
      {!winner && !noMoveLeft && `${current.isXNext ? 'X' : 'O'}'s turn`}
    </h2>
  );
}

export default StatusMessage;
