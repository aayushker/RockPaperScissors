let playerScore = 0;
let computerScore = 0;


function main(userChoice) {
    const compChoice = randomSelect();
    const idButton = userChoice;
    var pop = "";
    if (userChoice === compChoice) {
        console.log("Tie!");
        pop = "tie";
    } else if (userChoice === "rock" && compChoice === "scissors") {
        console.log("You win!");
        pop = "win";
        playerScore++;
    } else if (userChoice === "rock" && compChoice === "paper") {
        console.log("You lose!");
        pop = "lose";
        computerScore++;
    } else if (userChoice === "paper" && compChoice === "rock") {
        console.log("You win!");
        pop = "win";
        playerScore++;
    } else if (userChoice === "paper" && compChoice === "scissors") {
        console.log("You lose!");
        pop = "lose";
        computerScore++;
    } else if (userChoice === "scissors" && compChoice === "paper") {
        console.log("You win!");
        pop = "win";
        playerScore++;
    } else if (userChoice === "scissors" && compChoice === "rock") {
        console.log("You lose!");
        pop = "lose";
        computerScore++;
    } else {
        console.log("Fatal Error!");
        pop = "error";
    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');

    playerScoreElement.textContent = "Player Score: " + playerScore;
    computerScoreElement.textContent = "Computer Score: " + computerScore;

    popup(pop);

    const userChoiceElement = document.getElementById('userChoice');
    const computerChoiceElement = document.getElementById('computerChoice');
    
    userChoiceElement.innerHTML = '';
    computerChoiceElement.innerHTML = '';

    const userImg = document.createElement('img');
    userImg.src = './assets/' + idButton + '.jpg';
    userImg.style.width = '5vw';
    userImg.style.height = '5vw';
    userChoiceElement.appendChild(userImg);

    const computerImg = document.createElement('img');
    computerImg.src = './assets/' + compChoice + '.jpg';
    computerImg.style.width = '5vw';
    computerImg.style.height = '5vw';
    computerChoiceElement.appendChild(computerImg);
}

function randomSelect() {
    const n = Math.floor(Math.random() * 3);
    console.log(n);
    switch (n) {
        case 0:            
            // console.log("rock");
            return "rock";
        case 1:
            // console.log("paper");
            return "paper";
        case 2:
            // console.log("scissors");
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
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');
    playerScoreElement.textContent = "Player Score: " + playerScore;
    computerScoreElement.textContent = "Computer Score: " + computerScore;
    console.clear();
}

function popup(pop){
    const popText = document.getElementById('myPopup');
    if (pop === "win") {
        popText.innerHTML = "You win!";
        // alert("You win!");
    } else if (pop === "lose") {
        popText.innerHTML = "You lose!";
        // alert("You lose!");
    } else if (pop === "tie") {
        popText.innerHTML = "It's a Tie!";
        // alert("Tie!");
    } else if (pop === "error") {
        popText.innerHTML = "Fatal Error!";
        // alert("Fatal Error!");
    }
    else{
        popText.innerHTML = "Fatal Error!";
        // alert("Fatal Error!");
    }
}