import React from 'react';
import { useState, useEffect } from 'react';
import TicTacToe from './tic-tac-toe/TicTacToe.jsx'


const games = {
  'tic-tac-toe': <TicTacToe/>
}

const App = () => {
  const [ game, setGame ] = useState(null);



  const handleSelectChange = (e) => {
    setGame(e.target.value);
  }

  return (
    <div>
      Select Game:
      <select onChange={handleSelectChange}>
        <option value=""></option>
        <option value="tic-tac-toe">Tic Tac Toe</option>
      </select>
      <hr></hr>
      { games[game] }
    </div>
  )
}

export default App;