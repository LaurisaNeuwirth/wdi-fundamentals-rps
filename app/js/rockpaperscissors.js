////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
var move; 
        if (move != null){
           move = move;
        }
        else {
            move = getInput();
        }
return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`. 
var move;
        if (move != null){
           move = move;
        }
        else {
            move = randomPlay();
        }
return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
}
    else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
}
    else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';    
}   
    else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player'; 
}   
    else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
}   
    else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
}
    else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
}
    return winner;
}

function playToFive() {
    console.log("Time to play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;
    
while(playerWins < 5 && computerWins < 5) { 
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove(); 
    var winner = getWinner(playerMove, computerMove);
    
     if (winner === 'player') {
         playerWins = playerWins + 1;
    } 
     else if (winner === 'computer') {
         computerWins = computerWins + 1;
    }    
     else {
         computerWins = computerWins + 0;
         playerWins = playerWins + 0;
    }
     console.log("Player chose ", playerMove," while Computer chose ", computerMove);
     console.log("The winner this round is ", getWinner(playerMove, computerMove));   
    } 
     return ["Player has won ", playerWins, "and Computer has won ", computerWins];
}

playToFive();