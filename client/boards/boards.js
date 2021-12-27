class BoardMatrixBuilder {
  constructor(rows, columns, squareContent) {
    this.rows = rows;
    this.columns = columns;
    this.squareContent = squareContent;
  }

  buildBoard() {
    const board = [];
    for (let i = 0; i < this.columns; i += 1) {
      const row = []
      for (let j = 0; j < this.rows; j += 1) {
        row.push(this.squareContent);
      }
      board.push(row);
    }
    return board;
  }
}


export default BoardMatrixBuilder;