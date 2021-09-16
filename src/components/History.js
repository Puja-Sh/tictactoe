import React from 'react';

function History({ history, moveTo, currentMove }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                type="button"
                onClick={() => {
                  moveTo(move);
                }}
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
              >
                {move === 0 ? `` : `Go to step #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
