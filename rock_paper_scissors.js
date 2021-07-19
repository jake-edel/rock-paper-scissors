
function getRandomIntInclusive(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

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


function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie Game!")
    } else if ((playerSelection === "rock" && computerSelection == "paper") 
    || (playerSelection === "paper" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(("You lose!"))
    } else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You win!")
    }
}

function game() {


    for(i = 0; i < 5; i++) {
        var playerHand = window.prompt("Select rock, paper or scissors").toLowerCase;
        //playerHand = playerHand.toLowerCase;
        console.log(`Player hand: ${playerHand}`)

        playRound(playerHand, computerPlay());
    };
}

game();
