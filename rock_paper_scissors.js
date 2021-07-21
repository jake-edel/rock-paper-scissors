

//Return a random integer between 1 and 3
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

//Take random integer and apply either rock, paper or scissors.
function computerPlay() {
    var hand = getRandomIntInclusive(0,2)
    //console.log(hand);
    if (hand === 0) {
        hand = "rock"
    } else if (hand === 1) {
        hand = "paper"
    } else if (hand = 2) {
        hand = "scissors"
    };
    console.log(`Computer hand : ${hand}`)
    return hand;
}

//Take computers and players hand and compare for a winner
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie Game!")
    } else if ((playerSelection === "rock" && computerSelection == "paper") 
    || (playerSelection === "paper" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(("You lose!"))
        computerWins++;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You win!")
        playerWins++;
    }
}

//Play through game 5 times
function game() {

    for(i = 0; i < 5; i++) {
        var playerInput = window.prompt("Select rock, paper or scissors").toLowerCase();
        console.log(`Player hand: ${playerInput}`)
        playRound(playerInput, computerPlay());
        //playRound("rock", "scissors");

        console.log(`Computer: ${computerWins} || Player: ${playerWins}`);
    };
}

var computerWins = 0;
var playerWins = 0;

game();

if (computerWins > playerWins) {
    console.log("Computer wins!");
} else if (computerWins < playerWins) {
    console.log("Player Wins");
} else {
    console.log("Tie Game!")
}
