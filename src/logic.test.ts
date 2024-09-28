import { describe, expect, it } from "vitest";
import { getWinner } from "./logic";

describe("getWinner", () => {
  it("gets the right winner if there is one", () => {
    const grid: string[] = ["X", "O", "O", "X", "X", "O", "O", "X", "X"];
    const winner = getWinner(grid);
    expect(winner).toBe("X");
  });

  it("returns null if there is no winner", () => {
    const grid: string[] = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    const winner = getWinner(grid);
    expect(winner).toBe(null);
  });

  it("returns null if the grid is empty", () => {
    const grid: string[] = [];
    const winner = getWinner(grid);
    expect(winner).toBe(null);
  });

  it("returns null if the grid contains invalid input", () => {
    const grid = new Array(9).fill(" ");
    const winner = getWinner(grid);
    expect(winner).toBe(null);
  });
});
