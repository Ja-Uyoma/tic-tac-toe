import { MouseEventHandler, useState } from "react";

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

function Board() {
  const [cells, setCells] = useState(new Array<string>(9).fill(" "));
  const [cellValue, setCellValue] = useState("X");
  const [status, setStatus] = useState(`Player X's Turn`);

  const handleClick = (idx: number) => {
    const cellsCopy = [...cells];

    if (cellsCopy[idx] === " ") {
      cellsCopy[idx] = cellValue;
      setCells(cellsCopy);
      setCellValue(cellValue === "X" ? "O" : "X");
      setStatus(cellValue === "X" ? "Player O's Turn" : "Player X's Turn");
    }
  };

  const toggleRestart = () => {
    setCells(new Array(9).fill(" "));
    setCellValue("X");
  };

  return (
    <>
      <StatusBoard status={status} />

      <div className="grid grid-cols-3 grid-rows-3">
        {cells.map((val, idx) => (
          <Cell key={idx} value={val} onClickHandler={() => handleClick(idx)} />
        ))}
      </div>

      <Restart onClickHandler={() => toggleRestart()} />
    </>
  );
}

function App() {
  return (
    <>
      <header className="text-center py-4">
        <h1>Tic-Tac-Toe</h1>
      </header>

      <main>
        <Board />
      </main>

      <footer className="text-center py-4">
        <p>Copyright © 2024 Jimmy Givans Omondi</p>
      </footer>
    </>
  );
}

export default App;
