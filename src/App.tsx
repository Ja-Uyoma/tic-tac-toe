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
  const [cells, setCells] = useState(new Array<string>(9).fill(" "));
  const [currentValue, setCurrentValue] = useState("X");

  const handleClick = (idx: number) => {
    const squaresCopy = [...cells];

    if (squaresCopy[idx] === " ") {
      squaresCopy[idx] = currentValue;
      setCells(squaresCopy);
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
