/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */

import traverseBoard from "./traverse-board.js";
import checkValidMoves from "./knight-moves.js";

function knightShortestPath(start, end) {
  const visitedPath = traverseBoard(start, end);
  const shortestPath = [];
  let lastVisitedPath = visitedPath.pop();

  shortestPath.push(lastVisitedPath);

  while (visitedPath.length > 0) {
    const validMoves = checkValidMoves(lastVisitedPath);
    const currentLastVisitedPath = visitedPath.pop();

    for (let i = 0; i < validMoves.length; i++) {
      if (
        currentLastVisitedPath[0] === validMoves[i][0] &&
        currentLastVisitedPath[1] === validMoves[i][1]
      ) {
        shortestPath.push(currentLastVisitedPath);
        lastVisitedPath = currentLastVisitedPath;
      }
    }
  }

  return shortestPath.reverse();
}

console.log(
  `You made it in ${
    knightShortestPath([0, 0], [7, 7]).length
  } moves! Here is your path:`,
);

console.log(...knightShortestPath([0, 0], [7, 7]));
