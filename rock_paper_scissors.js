document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded")

    const winner = document.querySelector('#game-results')
    const computerHand = document.querySelector('#computer-hand')

    const buttons = document.querySelectorAll('button');
    console.log(buttons)

    var playerScore = 0;
    var computerScore = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            var playerInput = button.id;
            var computerInput = computerPlay();
            playRound(playerInput, computerInput);
            console.log(`Player Score: ${playerScore} || Computer Score: ${computerScore}`)
        });
    });

    //Take computers and players hand and compare for a winner
    function playRound (player, computer) {
        if (player === computer) {
            winner.textContent = "An even match"
            console.log("Tie Game!")
        } else if ((player === "sword" && computer == "shield") 
        || (player === "shield" && computer === "magic") 
        || (player === "magic" && computer === "sword")) {
            winner.textContent = "Computer Wins"
            console.log(("You lose!"))
            computerScore++;
        } else if ((player === "sword" && computer === "magic") 
        || (player === "shield" && computer === "sword") 
        || (player === "magic" && computer === "shield")) {
            winner.textContent ="Player Wins"
            console.log("You win!")
            playerScore++;
        }
    }

    //Return a random integer between 1 and 3
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //Take random integer and apply either rock, paper or scissors.
    function computerPlay() {


        var hand = getRandomIntInclusive(0,2)
        if (hand === 0) {
            hand = "sword"
        } else if (hand === 1) {
            hand = "shield"
        } else if (hand = 2) {
            hand = "magic"
        };
        computerHand.textContent = `Computer chooses ${hand}`
        return hand;
    }

});



                                                                    //Logic for Computer
