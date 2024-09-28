export type CrossOrNought = "X" | "O";

export function getWinner(grid: string[]): CrossOrNought | null {
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

    if (
      isCrossOrNought(grid[a]) &&
      isCrossOrNought(grid[b]) &&
      isCrossOrNought(grid[c])
    ) {
      if (grid[a] === grid[b] && grid[b] === grid[c]) {
        return grid[a] as CrossOrNought;
      }
    } else {
      continue;
    }
  }

  return null;
}

function isCrossOrNought(character: string) {
  return character === "X" || character === "O";
}
