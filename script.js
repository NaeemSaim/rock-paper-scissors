function getComputerChoice () {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function getHumanChoice () {
    const humanChoices = prompt("rock, paper or scissors?");
    return humanChoices;
}

let computerScore = 0
let humanScore = 0

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie. Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
    } else {
        console.log("Invalid Choice! Please enter rock, paper or scissors.");
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current Score - You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log(`--- Final Results ---`);
    if (humanScore > computerScore) {
        console.log(`You won the game! ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game! ${computerScore} to ${humanScore}`); 
    } else {
        console.log(`It's a tie. Final score You: ${humanScore} | Computer: ${computerScore}`);
    }
}

playGame()