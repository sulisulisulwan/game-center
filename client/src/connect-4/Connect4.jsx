import React from 'react';
import BoardMatrixBuilder from '../boards/boardBuilder';
import Board from '../boards/Board.jsx'
import { useState, useEffect } from 'react';
import GameStatus from './components/GameStatus.jsx'

const BoardBuilder = new BoardMatrixBuilder(7, 6, '');
const Connect4Board = BoardBuilder.buildBoard();


const Connect4 = () => {
  const [ isRedTurn, setIsRedTurn ] = useState(true);
  const [ gameStatus, setGameStatus ] = useState('noDraw');
  const [ board, updateBoard ] = useState(Connect4Board)
  const gameName = 'connect-4';

  const handleClickSquare = (e) => {
    console.log(e)
  }


  return (
    <div>
      <header>
        <h1 className="header-title">Connect Four</h1>
      </header>
      <GameStatus gameName={gameName}/>
      <Board board={board} gameName={gameName} handleClickSquare={handleClickSquare}/>
    </div>
  )
}

export default Connect4;