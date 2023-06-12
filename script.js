// Game of rock paper scissors against the computer
let playerCounter = 0;
let computerCounter = 0;

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
    const displayDiv = document.getElementById("resultsDisplay");
    let currentResult;

    // returns 0 if the player lost, returns 1 if the player won, returns 2 if it's a tie
    if (playerSelection === computerSelection) {
        displayDiv.textContent = `It's a tie! You both choose ${playerSelection}!`;
        return 2;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        displayDiv.textContent = `You lose! Paper beats Rock!`;
        return 0;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        displayDiv.textContent = "You win! Paper beats Rock!";
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        displayDiv.textContent = `You lose! Rock beats Scissors!`;
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        displayDiv.textContent = `You win! Rock beats Scissors!`;
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        displayDiv.textContent = `You lose! Scissors beat Paper!`;
        return 0;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        displayDiv.textContent = `You win! Scissors beat Paper!`;
        return 1;
    }
}

function game() {
        let computerSelection = getComputerChoice();
        const choicesDiv = document.getElementById("choicesDisplay");
        let currentGame;
        const totalDiv = document.getElementById("totalScoreDisplay");
    
        // Btn
    const rockBtn = document.querySelector('#rockBtn');
    rockBtn.addEventListener('click', () => {
        playerSelection = "rock";
        computerSelection = getComputerChoice();
        choicesDiv.textContent = `You choose ${playerSelection}. The computer chooses ${computerSelection}`;
        currentGame = playRound(playerSelection, computerSelection);
        switch (currentGame) {
            case 0: // player lost, computer won
                computerCounter++;
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
            case 1: // player won, computer lost
                playerCounter++;
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
            case 2: // it's a tie
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
        }
        checkScore(computerCounter, playerCounter);
    });

    const paperBtn = document.querySelector('#paperBtn');
    paperBtn.addEventListener('click', () => {
        playerSelection = "paper";
        computerSelection = getComputerChoice();
        choicesDiv.textContent = `You choose ${playerSelection}. The computer chooses ${computerSelection}`;
        currentGame = playRound(playerSelection, computerSelection);
        switch (currentGame) {
            case 0: // player lost, computer won
                computerCounter++;
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
            case 1: // player won, computer lost
                playerCounter++;
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
            case 2: // it's a tie
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
        }
        checkScore(computerCounter, playerCounter);
    });

    const scissorsBtn = document.querySelector('#scissorsBtn');
    scissorsBtn.addEventListener('click', () => {
        playerSelection = "scissors";
        computerSelection = getComputerChoice();
        choicesDiv.textContent = `You choose ${playerSelection}. The computer chooses ${computerSelection}`;
        currentGame = playRound(playerSelection, computerSelection);
        switch (currentGame) {
            case 0: // player lost, computer won
                computerCounter++;
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
            case 1: // player won, computer lost
                playerCounter++;
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
            case 2: // it's a tie
                totalDiv.textContent =`TOTAL SCORES: player ${playerCounter}, computer ${computerCounter}`;
                break;
        }
        checkScore(computerCounter, playerCounter);
    });
}

function checkScore(computerCounter, playerCounter) {
    if (computerCounter == 5 || playerCounter == 5) {
        resetScore();
    }
}

function resetScore() {
    computerCounter = 0;
    playerCounter = 0;
}