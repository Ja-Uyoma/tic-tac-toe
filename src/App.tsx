function App() {
  return (
    <div>
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>

      <footer>
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
