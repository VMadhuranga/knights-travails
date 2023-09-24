/* eslint-disable no-continue */
/* eslint-disable import/extensions */

import createGameBoard from "./game-board.js";
import checkValidMoves from "./knight-moves.js";

export default function traverseBoard(start, end) {
  const { getBoardCell } = createGameBoard();

  const queue = [];
  queue.push(start);

  const visitedCell = [];
  const visitedPath = [];

  while (queue.length > 0) {
    if (!visitedCell.includes(getBoardCell(queue[0][0], queue[0][1]))) {
      queue.push(...checkValidMoves(queue[0]));
    } else {
      queue.shift();
      continue;
    }

    if (queue[0][0] === end[0] && queue[0][1] === end[1]) {
      visitedCell.push(getBoardCell(queue[0][0], queue[0][1]));
      visitedPath.push(queue[0]);
      break;
    }

    visitedCell.push(getBoardCell(queue[0][0], queue[0][1]));
    visitedPath.push(queue[0]);

    queue.shift();
  }

  return visitedPath;
}
