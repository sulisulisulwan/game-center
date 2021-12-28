import React from 'react';

const Board = ({ board, gameName, handleClickSquare }) => {

  return (
    <div className={`${gameName} board-wrapper`}>
      { board.map((row, i) => {
        return (
          <div className={`${gameName} row-${i}`} key={`${gameName} rowkey${i}`}>
            { row.map((square, j) => <div 
                className={`${gameName} row-${i} column-${j}`} 
                key={`${gameName} rowcolkey${i}${j}`} 
                onClick={handleClickSquare}
              >
                {square}
              </div>) }
          </div>
        )
      }) }
    </div>
  )
}

export default Board;