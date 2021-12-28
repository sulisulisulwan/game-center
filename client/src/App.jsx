import React from 'react';
import { useState, useEffect } from 'react';
import TicTacToe from './tic-tac-toe/TicTacToe.jsx'
import Connect4 from './connect-4/Connect4.jsx';

const games = {
  'tic-tac-toe': <TicTacToe/>,
  'connect-4': <Connect4/>
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
        <option value="connect-4">Connect 4</option>
      </select>
      <hr></hr>
      { games[game] }
    </div>
  )
}

export default App;