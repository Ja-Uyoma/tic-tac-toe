import { Board } from "./components/Board";

function App() {
  return (
    <>
      <header className="text-center py-4 bg-slate-400">
        <h1 className="text-white text-4xl font-medium">Tic-Tac-Toe</h1>
      </header>

      <main className="flex-1 flex flex-col w-1/3 mx-auto">
        <Board />
      </main>

      <footer className="text-center py-4">
        <p>Copyright © 2024 Jimmy Givans Omondi</p>
      </footer>
    </>
  );
}

export default App;
