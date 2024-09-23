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
  const [currentValue, setCurrentValue] = useState("X");

  const handleClick = (idx: number) => {
    const cellsCopy = [...cells];

    if (cellsCopy[idx] === " ") {
      cellsCopy[idx] = currentValue;
      setCells(cellsCopy);
      setCurrentValue(currentValue === "X" ? "O" : "X");
    }
  };

  return (
    <>
      {cells.map((val, idx) => (
        <Cell key={idx} value={val} onClick={() => handleClick(idx)} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <header className="text-center">
        <h1>Tic-Tac-Toe</h1>
      </header>

      <main className="grid grid-cols-3 grid-rows-3">
        <Board />
      </main>

      <footer className="text-center">
        <p>Copyright © 2024 Jimmy Givans Omondi</p>
      </footer>
    </>
  );
}

export default App;
