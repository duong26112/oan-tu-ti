import { CHOICES, determineWinner, getComputerChoice } from "./game.js";

const score = { wins: 0, losses: 0, draws: 0 };
const scoreElements = {
  wins: document.querySelector("#wins"),
  losses: document.querySelector("#losses"),
  draws: document.querySelector("#draws"),
};

const playerChoiceElement = document.querySelector("#player-choice");
const computerChoiceElement = document.querySelector("#computer-choice");
const resultElement = document.querySelector("#result");

function updateScore() {
  Object.entries(scoreElements).forEach(([key, element]) => {
    element.textContent = score[key];
  });
}

function showChoice(element, choice) {
  const display = CHOICES[choice];
  element.textContent = display.emoji;
  element.setAttribute("aria-label", display.label);
  element.classList.remove("reveal");
  requestAnimationFrame(() => element.classList.add("reveal"));
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const outcome = determineWinner(playerChoice, computerChoice);

  showChoice(playerChoiceElement, playerChoice);
  showChoice(computerChoiceElement, computerChoice);

  if (outcome === "win") {
    score.wins += 1;
    resultElement.textContent = `Bạn thắng! ${CHOICES[playerChoice].label} vượt qua ${CHOICES[computerChoice].label}.`;
  } else if (outcome === "lose") {
    score.losses += 1;
    resultElement.textContent = `Bạn thua! ${CHOICES[computerChoice].label} vượt qua ${CHOICES[playerChoice].label}.`;
  } else {
    score.draws += 1;
    resultElement.textContent = "Hòa! Hai lựa chọn giống nhau.";
  }

  resultElement.className = `result ${outcome}`;
  updateScore();
}

function resetScore() {
  Object.keys(score).forEach((key) => {
    score[key] = 0;
  });
  updateScore();
  playerChoiceElement.textContent = "?";
  computerChoiceElement.textContent = "?";
  resultElement.textContent = "Chọn lựa chọn để chơi nhé!";
  resultElement.className = "result";
}

document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => play(button.dataset.choice));
});

document.querySelector("#reset-button").addEventListener("click", resetScore);

updateScore();
