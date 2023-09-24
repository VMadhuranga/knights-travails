/* eslint-disable no-plusplus */

export default function checkValidMoves(position) {
  const knightMoves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  const validMoves = [];

  for (let i = 0; i < knightMoves.length; i++) {
    if (
      position[0] + knightMoves[i][0] >= 0 &&
      position[1] + knightMoves[i][1] >= 0 &&
      position[0] + knightMoves[i][0] <= 7 &&
      position[1] + knightMoves[i][1] <= 7
    ) {
      validMoves.push([
        position[0] + knightMoves[i][0],
        position[1] + knightMoves[i][1],
      ]);
    }
  }

  return validMoves;
}
