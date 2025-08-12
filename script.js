let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let choice = prompt("Please choose between rock, paper or scissors.");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let outcomeText = "";
  let winner = "";

  if (humanChoice === computerChoice) {
    winner = "tie";
  } else if (humanChoice === "rock" && computerChoice === "scissors")
    winner = "human";
  else if (humanChoice === "rock" && computerChoice === "paper")
    winner = "computer";
  else if (humanChoice === "paper" && computerChoice === "rock")
    winner = "human";
  else if (humanChoice === "paper" && computerChoice === "scissors")
    winner = "computer";
  else if (humanChoice === "scissors" && computerChoice === "rock")
    winner = "computer";
  else if (humanChoice === "scissors" && computerChoice === "paper")
    winner = "computer";

  if (winner === "human") {
    humanScore++;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
  } else if (winner === "computer") {
    computerScore++;
    console.log(`You Lose! ${humanChoice} loses to ${computerChoice}`);
  } else {
    console.log(`No one wins! You both chose ${humanChoice}`);
  }
}

//call this method in the console to play
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore === computerScore) {
    console.log(
      `Final Results: There is no winner! You both tied with a score of ${humanScore}`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `Final Results: Congratulations! You are the WINNER! 
        \nYour score: ${humanScore}
        \nComputer score: ${computerScore}`
    );
  } else {
    console.log(
      `Final Results: Sorry, the Computer beat you... 
        \nComputer score: ${computerScore}
        \nYour score: ${humanScore}`
    );
  }
}
