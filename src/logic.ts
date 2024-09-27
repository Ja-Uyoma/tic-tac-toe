export type CrossOrNought = "X" | "O";

  if (!Array.isArray(grid) || !grid.length) {
    return null;
  }

  const winningCombinations = [
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (grid[a] === grid[b] && grid[b] === grid[c]) {
      return grid[a];
    }
  }

  return null;
}
