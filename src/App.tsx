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
      <button type="button" onClick={onClick} className="w-full min-h-4">
        {value}
      </button>
    </div>
  );
}

function Board() {
  const [squares, setSquares] = useState(new Array<string>(9).fill(" "));
  const [currentValue, setCurrentValue] = useState("X");

  const handleClick = (idx: number) => {
    const squaresCopy = [...squares];

    if (squaresCopy[idx] === " ") {
      squaresCopy[idx] = currentValue;
      setSquares(squaresCopy);
      setCurrentValue(currentValue === "X" ? "O" : "X");
    }
  };

  return (
    <>
      {squares.map((val, idx) => (
        <Cell key={idx} value={val} onClick={() => handleClick(idx)} />
      ))}
    </>
  );
}

function App() {
  const [cells, setCells] = useState(new Array(9).fill(" "));
  const [value, setValue] = useState("X");

  const handleClick = (idx: number) => {
    const cellsCopy = [...cells];

    if (cellsCopy[idx] === " ") {
      cellsCopy[idx] = value;
      setCells(cellsCopy);
      setValue(value === "X" ? "O" : "X");
    }
  };

  return (
    <div>
      <header className="text-center">
        <h1>Tic-Tac-Toe</h1>
      </header>

      <main className="grid grid-cols-3 grid-rows-3">
        {cells.map((val, idx) => (
          <Cell key={idx} value={val} onClick={() => handleClick(idx)} />
        ))}
      </main>

      <footer className="text-center">
        <p>Copyright © 2024 Jimmy Givans Omondi</p>
      </footer>
    </div>
  );
}

export default App;
