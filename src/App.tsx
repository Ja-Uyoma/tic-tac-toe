import { MouseEventHandler, useState } from "react";

function App() {
  const [value, setValue] = useState(" ");

  const handleClick = () => {
    if (value === " ") {
      setValue("X");
    } else if (value === "X") {
      setValue("O");
    } else if (value === "O") {
      setValue("X");
    }
  };

  return (
    <div>
      <header className="text-center">
        <h1>Tic-Tac-Toe</h1>
      </header>

      <main className="grid grid-cols-3 grid-rows-3">
        <Cell value={value} onClick={() => handleClick()} />
        <Cell value={value} onClick={() => handleClick()} />
        <Cell value={value} onClick={() => handleClick()} />
        <Cell value={value} onClick={() => handleClick()} />
        <Cell value={value} onClick={() => handleClick()} />
        <Cell value={value} onClick={() => handleClick()} />
        <Cell value={value} onClick={() => handleClick()} />
        <Cell value={value} onClick={() => handleClick()} />
        <Cell value={value} onClick={() => handleClick()} />
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
