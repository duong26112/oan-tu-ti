import test from "node:test";
import assert from "node:assert/strict";

import { CHOICES, determineWinner, getComputerChoice } from "./game.js";

test("all three choices are available", () => {
  assert.deepEqual(Object.keys(CHOICES), ["rock", "paper", "scissors"]);
});

test("determines winners correctly", () => {
  assert.equal(determineWinner("rock", "scissors"), "win");
  assert.equal(determineWinner("paper", "rock"), "win");
  assert.equal(determineWinner("scissors", "paper"), "win");
  assert.equal(determineWinner("rock", "paper"), "lose");
  assert.equal(determineWinner("paper", "scissors"), "lose");
  assert.equal(determineWinner("scissors", "rock"), "lose");
  assert.equal(determineWinner("rock", "rock"), "draw");
});

test("computer choice is one of the supported choices", () => {
  for (let index = 0; index < 100; index += 1) {
    assert.ok(CHOICES[getComputerChoice()]);
  }
});
