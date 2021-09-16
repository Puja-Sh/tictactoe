import React from 'react';

const Square = ({ value, onClick, isWinningSquares }) => {
  // console.log(winnerSquares);
  return (
    <button
      type="button"
      className={`square ${isWinningSquares ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
