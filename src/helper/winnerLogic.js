// squares is an array at we have to check at its indexes
export function calculateWinner(squares) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [1, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winLines.length; i++) {
    const [a, b, c] = winLines[i];
    if (squares[a] && squares[b] == squares[a] && squares[a] == squares[c]) {
      return squares[a]; // return winer X or O
    }
  }

  // until no winter return null
  return null;
}
