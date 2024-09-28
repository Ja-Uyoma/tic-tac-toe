import { MouseEventHandler, useState } from "react";
import { getWinner } from "./logic";

function Cell({
  value,
  onClickHandler,
}: {
  value: string;
  onClickHandler: MouseEventHandler;
}) {
  return (
    <div className="border border-black cursor-pointer">
      <button type="button" onClick={onClickHandler} className="size-full">
        {value}
      </button>
    </div>
  );
}

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
      <button type="button" onClick={onClickHandler}>
        Restart
      </button>
    </div>
  );
}

function Board({
  grid,
  updateGrid,
}: {
  grid: string[];
  updateGrid: (grid: string[]) => void;
}) {
  const [cellValue, setCellValue] = useState("X");
  const [status, setStatus] = useState(`Player X's Turn`);

  const handleClick = (idx: number) => {
    if (getWinner(grid)) {
      return;
    }

    const gridCopy = [...grid];

    if (gridCopy[idx] === " ") {
      gridCopy[idx] = cellValue;
      updateGrid(gridCopy);
      setCellValue(cellValue === "X" ? "O" : "X");
      setStatus(cellValue === "X" ? "Player O's Turn" : "Player X's Turn");
    }
  };

  const restartGame = () => {
    updateGrid(new Array(9).fill(" "));
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

function Game() {
  const [grid, setGrid] = useState(new Array<string>(9).fill(" "));

  return (
    <>
      <Board grid={grid} updateGrid={setGrid} />
    </>
  );
}

function App() {
  return (
    <>
      <header className="text-center py-4 bg-slate-400">
        <h1 className="text-white text-4xl font-medium">Tic-Tac-Toe</h1>
      </header>

      <main>
        <Game />
      </main>

      <footer className="text-center py-4">
        <p>Copyright © 2024 Jimmy Givans Omondi</p>
      </footer>
    </>
  );
}

export default App;
