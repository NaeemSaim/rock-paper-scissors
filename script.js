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

}