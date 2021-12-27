import React from 'react';
import { useState, useEffect } from 'react';
import Board from './components/Board.jsx'
import GameStatus from './components/GameStatus.jsx'
import checkForWinner from './checkWinner.js';
import BoardMatrixBuilder from '../../boards/boards.js';

const BoardBuilder = new BoardMatrixBuilder(3, 3, '');
const TicTacToeBoard = BoardBuilder.buildBoard();


const TicTacToe = () => {
	const [ isXTurn, setIsXTurn] = useState(true);
	const [ gameStatus, setGameStatus ] = useState('noDraw')
	const [ board, updateBoard ] = useState(TicTacToeBoard);

	useEffect(() => {
		const status = checkForWinner(board);
		if (status !== 'noDraw') {
			setGameStatus(status)
		}
	}, [board])

	const handleClickSquare = (e) => {
		const row = Number(e.target.className[4]);
		const column = Number(e.target.className[13]);
		if (board[row][column].length) {
			//if square is filled, do nothing
			return
		}
		const newBoard = board.slice();
		const mark = isXTurn ? 'X' : 'O'
		newBoard[row][column] = mark;
		setIsXTurn(!isXTurn)
		updateBoard(newBoard);
	}

	return (
		<div>
			<header>
				<h1 className="header-title">Tic Tac Toe</h1>
			</header>
			<GameStatus isXTurn={isXTurn} gameStatus={gameStatus}/>
			<Board board={board} handleClickSquare={handleClickSquare}/>
		</div>
	)
}

export default TicTacToe;
