import { describe, expect, it } from "vitest";
import { getWinner } from "./logic";

describe("getWinner", () => {
  it("gets the right winner if there is one", () => {
    const grid = ["X", "O", "O", "X", "X", "O", "O", "X", "X"];
    const winner = getWinner(grid);
    expect(winner).toBe("X");
  });

  it("returns null if there is no winner", () => {
    const grid = new Array(9).fill(" ");
    const winner = getWinner(grid);
    expect(winner).toBe(null);
  });

  it("returns null if the grid is empty", () => {
    const grid: string[] = [];
    const winner = getWinner(grid);
    expect(winner).toBe(null);
  });
});
