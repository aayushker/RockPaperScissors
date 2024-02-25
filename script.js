let playerScore = 0;
let computerScore = 0;

function main(userChoice) {
    const compChoice = randomSelect();
    if (userChoice === compChoice) {
        console.log("Tie!");
    } else if (userChoice === "rock" && compChoice === "scissors") {
        console.log("You win!");
        playerScore++;
    } else if (userChoice === "rock" && compChoice === "paper") {
        console.log("You lose!");
        computerScore++;
    } else if (userChoice === "paper" && compChoice === "rock") {
        console.log("You win!");
        playerScore++;
    } else if (userChoice === "paper" && compChoice === "scissors") {
        console.log("You lose!");
        computerScore++;
    } else if (userChoice === "scissors" && compChoice === "paper") {
        console.log("You win!");
        playerScore++;
    } else if (userChoice === "scissors" && compChoice === "rock") {
        console.log("You lose!");
        computerScore++;
    } else {
        console.log("Fatal Error!");
    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');

    playerScoreElement.textContent = "Player Score: " + playerScore;
    computerScoreElement.textContent = "Computer Score: " + computerScore;
}

function randomSelect() {
    const n = Math.floor(Math.random() * 3);
    switch (n) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            throw new Error("Fatal Error!");
    }
}

function play(button) {
    const idButton = button.id;
    const image = document.getElementById('rotatingImage');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    image.style.display = 'block';

    setTimeout(function () {
        image.style.display = 'none';
        rock.style.display = 'block';
        paper.style.display = 'block';
        scissors.style.display = 'block';
        main(idButton);
    }, 1200);

    const userChoiceElement = document.getElementById('userChoice');
    const computerChoiceElement = document.getElementById('computerChoice');
    

    userChoiceElement.innerHTML = '';
    computerChoiceElement.innerHTML = '';

    const userImg = document.createElement('img');
    userImg.src = './assets/' + idButton + '.jpg';
    userImg.style.width = '100px';
    userImg.style.height = '100px';
    userChoiceElement.appendChild(userImg);

    const compChoice = randomSelect();
    const computerImg = document.createElement('img');
    computerImg.src = './assets/' + compChoice + '.jpg';
    computerImg.style.width = '100px';
    computerImg.style.height = '100px';
    computerChoiceElement.appendChild(computerImg);


}

function reset() {
    playerScore = 0;
    computerScore = 0;
    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');
    playerScoreElement.textContent = "Player Score: " + playerScore;
    computerScoreElement.textContent = "Computer Score: " + computerScore;
}

