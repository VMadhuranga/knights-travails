/* eslint-disable no-plusplus */

export default function createGameBoard() {
  const board = [];
  let cell = 1;

  for (let i = 0; i < 8; i++) {
    board[i] = [];

    for (let j = 0; j < 8; j++) {
      board[i][j] = cell++;
    }
  }

  function getBoardCell(x, y) {
    return board[x][y];
  }

  return { getBoardCell };
}
