import { useState } from "react";
import { getWinner } from "../logic";
import { Cell } from "./Cell";
import { StatusBoard } from "./StatusBoard";
import { Restart } from "./Restart";

export function Board() {
  const [grid, setGrid] = useState(new Array<string>(9).fill(" "));
  const [currentMove, setCurrentMove] = useState("X");

  const handleClick = (idx: number) => {
    if (getWinner(grid) || grid[idx] != " ") {
      return;
    }

    const gridCopy = [...grid];

    gridCopy[idx] = currentMove;
    setGrid(gridCopy);
    setCurrentMove(currentMove === "X" ? "O" : "X");
  };

  const restartGame = () => {
    setGrid(new Array(9).fill(" "));
    setCurrentMove("X");
  };

  const winner = getWinner(grid);
  let status = "";

  if (winner) {
    status = "Winner: Player " + winner;
  } else {
    if (grid.find((char) => char === " ")) {
      status = "Player " + currentMove + "'s Turn";
    } else {
      status = "It's a Tie!";
    }
  }

  return (
    <>
      <StatusBoard status={status} />

      <div className="flex-1 grid grid-cols-3 grid-rows-3">
        {grid.map((val, idx) => (
          <Cell key={idx} value={val} onClickHandler={() => handleClick(idx)} />
        ))}
      </div>

      <Restart onClickHandler={() => restartGame()} />
    </>
  );
}
