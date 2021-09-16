import React from 'react';

const Square = ({ value, onClick, isWinningSquares }) => {
  // console.log(winnerSquares);
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        backgroundColor: isWinningSquares ? 'pink' : 'white',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
