document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded")

    const winner = document.querySelector('#winner')
    const computerHand = document.querySelector('#computer')

    console.log(winner)

    const buttons = document.querySelectorAll('button');
    console.log(buttons)

    var playerScore = 0;
    var computerScore = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            var playerInput = button.id;
            buttonAnimate(button.id);
            var computerInput = computerPlay();
            playRound(playerInput, computerInput);
        });
    });

    function buttonAnimate (button) {
        var animate = document.getElementById(button)
        animate.className = 'animateButton';
        setTimeout(() => { animate.classList.remove('animateButton');}, 2000);
    }

    function fadeoutAnimate(text) {
        var fadeout = document.getElementById(text)
        fadeout.className = 'fadeout'
        setTimeout(() => { fadeout.classList.remove('fadeout');}, 2000);

    }


    //Take computers and players hand and compare for a winner
    function playRound (player, computer) {

        // var fadeout = document.getElementById(winner)
        // fadeout.className = 'fadeout'
        // setTimeout(() => { fadeout.classList.remove('fadeout');}, 2000);


        fadeoutAnimate(winner.id);


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


    var imgSword = document.createElement("img")
    var imgShield = document.createElement("img")
    var imgMagic = document.createElement("img")

    imgSword.id = "computer-hand"
    imgShield.id = "computer-hand"
    imgMagic.id = "computer-hand"

    imgSword.src = "images/sword.png"
    imgShield.src = "images/shield.png"
    imgMagic.src = "images/magic.png"

    var computerChoice = document.getElementById("computer-icon")

    //Return a random integer between 1 and 3
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //Take random integer and apply either rock, paper or scissors.
    function computerPlay() {
        computerChoice.removeChild(computerChoice.childNodes[0]);
        var hand = getRandomIntInclusive(0,2)
        if (hand === 0) {
            hand = "sword"
            computerChoice.appendChild(imgSword);
        } else if (hand === 1) {
            hand = "shield"
            computerChoice.appendChild(imgShield);
        } else if (hand = 2) {
            hand = "magic"
            computerChoice.appendChild(imgMagic);
        };
        return hand;
    }

});


