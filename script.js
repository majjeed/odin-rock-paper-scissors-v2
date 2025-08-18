let humanScore = 0;
let computerScore = 0;
let gameRounds = 0;

const resultDiv = document.querySelector(".result");

function updateResult(message) {
  const p = document.createElement("p");
  p.textContent = message;
  resultDiv.appendChild(p);
}

function clearResult() {
  resultDiv.textContent = "";
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  let winner = "";

  if (humanChoice === computerChoice) {
    winner = "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "human";
  } else {
    winner = "computer";
  }

  if (winner === "human") {
    humanScore++;
    updateResult(`✅ You Win! ${humanChoice} beats ${computerChoice}`);
  } else if (winner === "computer") {
    computerScore++;
    updateResult(`❌ You Lose! ${humanChoice} loses to ${computerChoice}`);
  } else {
    updateResult(`⚖️ No one wins! You both chose ${humanChoice}`);
  }

  updateResult(`Current Score: You ${humanScore} - ${computerScore} Computer`);
}

function playGame(humanSelection) {
  const computerSelection = getComputerChoice();
  gameRounds++;

  updateResult(`--- Round ${gameRounds}/5 ---`);
  playRound(humanSelection, computerSelection);

  if (gameRounds === 5) {
    updateResult("----- FINAL RESULTS -----");
    if (humanScore === computerScore) {
      updateResult(
        `🤝 It's a tie! Final Score: ${humanScore}-${computerScore}`
      );
    } else if (humanScore > computerScore) {
      updateResult(
        `🎉 You WIN the game! Final Score: ${humanScore}-${computerScore}`
      );
    } else {
      updateResult(
        `💻 Computer wins the game! Final Score: ${computerScore}-${humanScore}`
      );
    }

    // reset for next game
    gameRounds = 0;
    humanScore = 0;
    computerScore = 0;

    updateResult("Game reset. Start a new 5-round match!");
  }
}

let btnContainer = document.querySelector(".buttonContainer");
btnContainer.addEventListener("click", (event) => {
  let target = event.target;

  if (["rock", "paper", "scissors"].includes(target.id)) {
    playGame(target.id);
  }
});
