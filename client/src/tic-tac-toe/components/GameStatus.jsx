import React from 'react';

const GameStatus = ({ isXTurn, gameName, gameStatus }) => {

  return (
    <div className={`${gameName} game-status`}>{
      gameStatus === 'noDraw' ? `It is ${ isXTurn ? 'X' : 'O' }'s turn`
      : gameStatus === 'draw' ? 'Game is a Draw!'
      : `${gameStatus} is the WINNER!`
      }
    </div>
  )
}

export default GameStatus;