import React from 'react';

const Board = ({ board, handleClickSquare }) => {

  const row1col1 = board[0][0]
  const row1col2 = board[0][1]
  const row1col3 = board[0][2]
  const row2col1 = board[1][0]
  const row2col2 = board[1][1]
  const row2col3 = board[1][2]
  const row3col1 = board[2][0]
  const row3col2 = board[2][1]
  const row3col3 = board[2][2]



  return (
    <div className="board-wrapper">
      <div className="row-1">
        <div className="row-0 column-0" onClick={handleClickSquare}>{row1col1}</div>
        <div className="row-0 column-1" onClick={handleClickSquare}>{row1col2}</div>
        <div className="row-0 column-2" onClick={handleClickSquare}>{row1col3}</div>
      </div>
      <div className="row-2">
        <div className="row-1 column-0" onClick={handleClickSquare}>{row2col1}</div>
        <div className="row-1 column-1" onClick={handleClickSquare}>{row2col2}</div>
        <div className="row-1 column-2" onClick={handleClickSquare}>{row2col3}</div>
      </div>
      <div className="row-2">
        <div className="row-2 column-0" onClick={handleClickSquare}>{row3col1}</div>
        <div className="row-2 column-1" onClick={handleClickSquare}>{row3col2}</div>
        <div className="row-2 column-2" onClick={handleClickSquare}>{row3col3}</div>
      </div>
    </div>
  )
}

export default Board;