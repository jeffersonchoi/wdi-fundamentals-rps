////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === undefined || move === null) {
        move = getInput();
    }
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
    /* Your Expression */
}

function getComputerMove(move) {
     if (move === undefined || move === null) {
        move = randomPlay();
    }

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
    /* Your Expression */
}


function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    } else winner = "tie";
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;

while (playerWins < 5 && computerWins < 5) {
    var player=getInput();
    var computer=randomPlay();
    var result=getWinner(player,computer);


    if (result === "computer") {
    computerWins += 1;
    console.log("Computer Wins!");
}
else if (result === "player") {
    playerWins += 1;
    console.log("Player Wins!");
}

    console.log(result);
    
      console.log('Player chose ' + player + ' while Computer chose ' + computer);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');


}
console.log('Player chose ' + player + ' while Computer chose ' + computer);
  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
}


