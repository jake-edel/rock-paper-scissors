
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded")

    const textBox = document.querySelector('#console')
    const computerHand = document.querySelector('#computer')
    const playerHealthUI = document.querySelector('#playerHP')
    const computerHealthUI = document.querySelector('#enemyHP')
    const buttons = document.querySelectorAll('button');
    const computerChoice = document.getElementById("computer-icon")

    var baseHealth = 10;
    var playerHealth = baseHealth;
    var computerHealth = baseHealth;
    var lockGame = false;
    var roundLength = 1000;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (lockGame === false) {
                lockGame = true;       
                var playerInput = button.id;
                buttonAnimate(button.id);
                var computerInput = computerPlay();
                playRound(playerInput, computerInput);
                setTimeout(() => { lockGame = false; }, roundLength)
            }

            if (playerHealth === 0 || computerHealth === 0){
                gameOver();
            }
        });
    });

    function buttonAnimate (button) {
        var animate = document.getElementById(button)
        animate.className = 'animateButton';
        setTimeout(() => { animate.classList.remove('animateButton');}, roundLength);
    }

    function fadeoutAnimate(id) {
        var fadeout = document.getElementById(id)
        fadeout.className = 'fadeout'
        setTimeout(() => { fadeout.classList.remove('fadeout');}, roundLength);

    }


    //Take computers and players hand and compare for a winner
    function playRound (player, computer) {
        //fadeoutAnimate(winner.id);
        if (player === computer) {
            createConsoleText("An even match")
        } else if ((player === "sword" && computer == "shield") 
        || (player === "shield" && computer === "magic") 
        || (player === "magic" && computer === "sword")) {
            createConsoleText("Computer Wins")
            playerHealth--;
            updateHealth();
        } else if ((player === "sword" && computer === "magic") 
        || (player === "shield" && computer === "sword") 
        || (player === "magic" && computer === "shield")) {
            createConsoleText("Player Wins")
            computerHealth--;
            updateHealth();
        }
    }

    function createConsoleText (text){
        var consoleElement = document.createElement('div')
        consoleElement.textContent = text;
        textBox.appendChild(consoleElement);
        textBox.scrollTop = 10000000000;
    }

    function displayComputerChoice(hand) {
        var imgComputerChoice = document.createElement('img')
        imgComputerChoice.id = "computer-hand"
        switch (hand){
            case "sword":;
                imgComputerChoice.src = "images/sword.png";
                computerChoice.appendChild(imgComputerChoice);
            case "shield":;
                imgComputerChoice.src = "images/shield.png";
                computerChoice.appendChild(imgComputerChoice);
            case "magic":;
                imgComputerChoice.src = "images/magic.png";
                computerChoice.appendChild(imgComputerChoice);
        }
        fadeoutAnimate("computer-hand")

    }


    function updateHealth () {
        playerHealthUI.textContent = `Player HP = ${playerHealth}`;
        computerHealthUI.textContent = `Enemy HP = ${computerHealth}`;
    }


    //Return a random integer between min and max
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //Take random integer and apply either rock, paper or scissors.
    function computerPlay() {
        computerChoice.removeChild(computerChoice.childNodes[0]);
        var hand = getRandomIntInclusive(0,2)
        if (hand === 0) {
            hand = "sword"
            displayComputerChoice(hand);
        } else if (hand === 1) {
            hand = "shield"
            displayComputerChoice(hand);
        } else if (hand = 2) {
            hand = "magic"
            displayComputerChoice(hand);
        };
        return hand;
    }

    function gameOver(){
        var endGameScreen = document.createElement('div');
        var restartButton = document.createElement('a')
        var main = document.getElementsByTagName('main')
        endGameScreen.id = "game-over"
        endGameScreen.className = "center"
        endGameScreen.textContent = "Game Over || "
        restartButton.textContent = "Play Again?"
        restartButton.href = "";
        endGameScreen.appendChild(restartButton)
        main[0].appendChild(endGameScreen);
    }
});


