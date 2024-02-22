let playerScore = 0;
let computerScore = 0;

function main( userChoice){
   compChoice = randomSelect();
   if (userChoice === compChoice){
        console.log("Tie!");
   }
   else if (userChoice === "rock" && compChoice === "scissors"){
        console.log("You win!");
        playerScore++;
   }
   else if (userChoice === "rock" && compChoice === "paper"){
        console.log("You lose!");
        computerScore++;
   }
   else if (userChoice === "paper" && compChoice === "rock"){
        console.log("You win!");
        playerScore++;
   }
   else if (userChoice === "paper" && compChoice === "scissors"){
        console.log("You lose!");
        computerScore++;
   }
   else if (userChoice === "scissors" && compChoice === "paper"){
        console.log("You win!");
        playerScore++;
   }
   else if (userChoice === "scissors" && compChoice === "rock"){
        console.log("You lose!");
        computerScore++;
   }
   else{
        console.log("Fatal Error!");
   }
   console.log("Player Score: " + playerScore);
   console.log("Computer Score: " + computerScore);
}

function randomSelect(){
    const n = Math.floor(Math.random()*3);
    if (n == 0 ){
        return "rock";
    }
    else if (n == 1){
        return "paper";
    }
    else if (n == 2){
        return "scissors";
    }
    else{
        return "Fatal Error!"
    }
}

function play(button){
    let idButton = button.id;
    let image = document.getElementById('rotatingImage');
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    
    // Hide all images
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    // Display the image and start rotation
    image.style.display = 'block';
    
    // Delay the call to main function
    setTimeout(function() {
        // Hide the image
        image.style.display = 'none';
        rock.style.display = 'block';
        paper.style.display = 'block';
        scissors.style.display = 'block';
        // Call the main function
        main(idButton);
    }, 1200); // Delay for 2 seconds

    let userChoice = document.getElementById('userChoice');
    let computerChoice = document.getElementById('computerChoice');
    let playerScore = document.getElementById('playerScore');
    let computerScore = document.getElementById('computerScore');

    // Clear previous images
    userChoice.innerHTML = '';
    computerChoice.innerHTML = '';

    // Create image for user's choice
    let userImg = document.createElement('img');
    userImg.src = './assets/' + idButton + '.jpg'; // replace with actual image file path
    userImg.style.width = '100px';
    userImg.style.height = '100px';
    userChoice.appendChild(userImg); // append the image to the userChoice element

    // Create image for computer's choice
    let computerImg = document.createElement('img');
    computerImg.src = './assets/' + compChoice + '.jpg'; // replace with actual image file path
    computerImg.style.width = '100px';
    computerImg.style.height = '100px';
    computerChoice.appendChild(computerImg); // append the image to the computerChoice element

    // Update scores
    playerScore.textContent = "Player Score: " + playerScore.textContent;
    computerScore.textContent = "Computer Score: " + computerScore.textContent;
}

function playAgain(){
    reset();
    displayScore();
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}