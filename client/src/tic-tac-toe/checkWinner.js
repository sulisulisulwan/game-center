const checkIfDraw = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    let row = board[i];
    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === '') {
        return 'noDraw';
      }
    }
  }
  return 'draw';
}

const scanColumns = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    let mark;
    for (let j = 0; j < board.length; j += 1) {
      let square = board[j][i];
      if (j === 0) {
        mark = square;
      }
      if (!square.length || square !== mark) {
        break;
      }
      if (j === 2) {
        return mark;
      }
    }
  }
  return null;
}

const scanRows = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    let mark = row[0]
    for (let j = 0; j < row.length; j += 1) {
      if (!row[j].length || row[j] !== mark) {
        break;
      }
      if (j === 2) {
        return mark;
      }
    }
  }
  return null;
}

const scanDiagonals = (board) => {
  let mark = board[0][0];
  for (let i = 0; i < board.length; i += 1) {
    if (!board[i][i].length || board[i][i] !== mark) {
      break;
    }
    if (i === 2) {
      return mark;
    }
  }

  let i = board.length - 1
  let j = 0;
  mark = board[i][j];
  while (i >= 0) {
    if (!board[i][j].length || board[i][j] !== mark) {
      break;
    }
    if (i === 0) {
      return mark;
    }
    i -= 1
    j += 1;
  }

  return null;
}

const checkForWinner = (board) => {
  const scans = [scanColumns, scanRows, scanDiagonals, checkIfDraw];
  for (let i = 0; i < scans.length; i += 1) {
    let result = scans[i](board)
    if (result !== null) {
      return result;
    }
  }

}

export default checkForWinner;
