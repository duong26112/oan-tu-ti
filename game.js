export const CHOICES = Object.freeze({
  rock: { emoji: "✊", label: "Kéo" },
  paper: { emoji: "✋", label: "Búa" },
  scissors: { emoji: "✌️", label: "Bao" },
});

export function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";

  const winningPairs = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return winningPairs[playerChoice] === computerChoice ? "win" : "lose";
}

export function getComputerChoice() {
  const choices = Object.keys(CHOICES);
  return choices[Math.floor(Math.random() * choices.length)];
}
