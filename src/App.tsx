import { MouseEventHandler, useState } from "react";

function App() {
  const [cells, setCells] = useState(new Array(9).fill(" "));
  const [value, setValue] = useState(" ");

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

export default App;
