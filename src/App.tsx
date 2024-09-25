import { MouseEventHandler, useState } from "react";

function Cell({
  value,
  onClick,
}: {
  value: string;
  onClick: MouseEventHandler;
}) {
  return (
    <div className="border border-black cursor-pointer">
      <button type="button" onClick={onClick} className="size-full">
        {value}
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

  const handleRestart = () => {
    setCells(new Array(9).fill(" "));
    setCellValue("X");
  };

  return (
    <>
      <div className="text-center py-2">
        <p>{status}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-3">
        {cells.map((val, idx) => (
          <Cell key={idx} value={val} onClick={() => handleClick(idx)} />
        ))}
      </div>

      <div className="flex justify-center py-2">
        <button type="button" onClick={() => handleRestart()}>
          Restart
        </button>
      </div>
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
