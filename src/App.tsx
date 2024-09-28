import { MouseEventHandler, useState } from "react";
import { getWinner } from "./logic";
import { Cell } from "./components/Cell";

function StatusBoard({ status }: { status: string }) {
  return (
    <div className="text-center py-2">
      <p>{status}</p>
    </div>
  );
}

function Restart({ onClickHandler }: { onClickHandler: MouseEventHandler }) {
  return (
    <div className="flex justify-center py-2">
      <button
        type="button"
        onClick={onClickHandler}
        className="text-white font-medium rounded-md bg-sky-600 border px-4 py-2 active:shadow-lg active:scale-95 transition duration-200 ease-in-out hover:bg-sky-800"
      >
        Restart
      </button>
    </div>
  );
}

function Board() {
  const [grid, setGrid] = useState(new Array<string>(9).fill(" "));
  const [cellValue, setCellValue] = useState("X");
  const [status, setStatus] = useState(`Player X's Turn`);

  const handleClick = (idx: number) => {
    if (getWinner(grid) || grid[idx] != " ") {
      return;
    }

    const gridCopy = [...grid];

    gridCopy[idx] = cellValue;
    setGrid(gridCopy);
    setCellValue(cellValue === "X" ? "O" : "X");
    setStatus(cellValue === "X" ? "Player O's Turn" : "Player X's Turn");
  };

  const restartGame = () => {
    setGrid(new Array(9).fill(" "));
    setCellValue("X");
    setStatus("Player X's Turn");
  };

  return (
    <>
      <StatusBoard status={status} />

      <div className="grid grid-cols-3 grid-rows-3">
        {grid.map((val, idx) => (
          <Cell key={idx} value={val} onClickHandler={() => handleClick(idx)} />
        ))}
      </div>

      <Restart onClickHandler={() => restartGame()} />
    </>
  );
}

function App() {
  return (
    <>
      <header className="text-center py-4 bg-slate-400">
        <h1 className="text-white text-4xl font-medium">Tic-Tac-Toe</h1>
      </header>

      <main className="flex-1">
        <Board />
      </main>

      <footer className="text-center py-4">
        <p>Copyright © 2024 Jimmy Givans Omondi</p>
      </footer>
    </>
  );
}

export default App;
