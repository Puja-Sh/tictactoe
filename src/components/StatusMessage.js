import React from 'react';

function StatusMessage({ winner, current }) {
  const noMoveLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          <span className="text-green">X </span> and{' '}
          <span className="text-orange">O </span> tied!
        </>
      )}

      {!winner && !noMoveLeft && (
        <>
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
          {" '"}s turn
        </>
      )}
    </h2>
  );
}

export default StatusMessage;
