const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput == "rock" || userInput == "paper" || userInput =="scissors" || userInput =="bomb") {
    return userInput;
  } else {
    console.log("You need to choose rock, paper or scissors");
  }
};

//console.log(getUserChoice("rock"));  test1
//console.log(getUserChoice("paper")); test2
//console.log(getUserChoice("otherthing")); test3


const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0){
    return "rock";
  } else if (computerChoice == 1){
    return "paper";
  } else {
    return "scissors";
  }
};

function determineWinner (userChoice, computerChoice) {
  if(userChoice == "bomb") {
    return "The user won using the bomb!!!!!";
  }
  
  if (userChoice == computerChoice){
    return "The game was a tie!";
  } else if( userChoice == "rock"){
    if(computerChoice == "paper"){
      return "The computer won";
    } else{
      return "The user won";
    }
  } else if (userChoice == "paper"){
    if(computerChoice == "rock") {
      return "The user won";
    } else {
      return "The computer won";
    }
  } else {
    if(computerChoice == "rock"){
      return "The computer won";
    } else {
      return "The player won";
    }
  }
}

console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

function playGame() {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice("");
  console.log("You threw:" + userChoice);
  console.log("The computer threw" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));

}

playGame();

