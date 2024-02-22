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
    main(idButton);
}
