import React from 'react';

function History({ history, moveTo, currentMove }) {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li>
            <button
              type="button"
              key={move}
              onClick={() => {
                moveTo(move);
              }}
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
            >
              {move === 0 ? `Start the game` : `Go to step #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default History;
