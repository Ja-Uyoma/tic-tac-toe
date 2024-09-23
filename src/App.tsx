function App() {
  return (
    <div>
      <header className="text-center">
        <h1>Tic-Tac-Toe</h1>
      </header>

      <main>
        <Cell value="" />
        <Cell value="" />
        <Cell value="" />
        <Cell value="" />
        <Cell value="" />
        <Cell value="" />
        <Cell value="" />
        <Cell value="" />
        <Cell value="" />
      </main>

      <footer className="text-center">
        <p>Copyright © 2024 Jimmy Givans Omondi</p>
      </footer>
    </div>
  );
}

function Cell({ value }: { value: string }) {
  return (
    <div>
      <button type="button">{value}</button>
    </div>
  );
}

export default App;
