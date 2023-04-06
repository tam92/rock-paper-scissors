// Game of rock paper scissors against the computer
game(); // We play a game

// ----- FUNCTIONS -----

// Function to get the computer's choice:
function getComputerChoice() {
    // We get a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}

// Function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // returns 0 if the player lost, returns 1 if the player won, returns 2 if it's a tie
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! You both choose ${playerSelection}!`);
        return 2;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You lose! Paper beats Rock!`);
        return 0;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock!");
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You lose! Rock beats Scissors!`);
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You win! Rock beats Scissors!`);
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`You lose! Scissors beat Paper!`);
        return 0;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win! Scissors beat Paper!`);
        return 1;
    }
}

// Function that plays a 5 round game and keeps score and reports a winner or looser at the end
function game() {
    let playerCounter = 0;
    let computerCounter = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper Scissors").toLowerCase();
        let computerSelection = getComputerChoice();

        console.log(`You choose ${playerSelection}. The computer chooses ${computerSelection}`);

        let currentGame = playRound(playerSelection, computerSelection);
        
        switch (currentGame) {
            case 0: // player lost, computer won
                computerCounter++;
                break;
            case 1: // player won, computer lost
                playerCounter++;
                break;
            case 2: // it's a tie
                playerCounter++;
                computerCounter++;
                break;
        }
    }

    console.log(`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`);

    // Report a winner at the end
    if (playerCounter > computerCounter) {
        console.log("You win!");
    } if (computerCounter > playerCounter) {
        console.log("The computer wins!");
    } else {
        console.log("It's a tie!");
    }
}