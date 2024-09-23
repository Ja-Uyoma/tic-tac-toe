import { MouseEventHandler } from "react";

function App() {
  return (
    <div>
      <header className="text-center">
        <h1>Tic-Tac-Toe</h1>
      </header>

      <main className="grid grid-cols-3 grid-rows-3">
        <Cell value="" onClick={() => console.log("Clicked!")} />
        <Cell value="" onClick={() => console.log("Clicked!")} />
        <Cell value="" onClick={() => console.log("Clicked!")} />
        <Cell value="" onClick={() => console.log("Clicked!")} />
        <Cell value="" onClick={() => console.log("Clicked!")} />
        <Cell value="" onClick={() => console.log("Clicked!")} />
        <Cell value="" onClick={() => console.log("Clicked!")} />
        <Cell value="" onClick={() => console.log("Clicked!")} />
        <Cell value="" onClick={() => console.log("Clicked!")} />
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
      <button type="button" onClick={onClick} className="w-full">
        {value}
      </button>
    </div>
  );
}

export default App;
