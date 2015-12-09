$(document).ready(function() {
  rps = ["rock", "paper", "scissors"];
  var playerChoice;
  var computerChoice;
  var computerWins = 0;
  var playerWins = 0;
  var round = 0;

  function computerTurn(ranNum){
    computerChoice = rps[ranNum];
    return computerChoice;
  }

  $("a").on("click", function runGame(){
    var ranNum = Math.floor(Math.random() * rps.length);
    playerChoice = $(this).attr("id");
    computerTurn(ranNum);
    round ++;
      if (round <= 5){
        if (playerChoice === computerChoice){
          console.log("tie");
        }else if(playerChoice === "rock"){
          if (computerChoice ==="paper"){
            computerWins ++;
            console.log("player Loses");
          }else{
            console.log("player Wins");
            playerWins++;
          }
        }else if(playerChoice === "paper"){
          if(computerChoice === "scissors"){
            computerWins ++;
            console.log("player Loses");
          }else{
            console.log("player Wins");
            playerWins++;
          }
        }else if(playerChoice === "scissors"){
          if(computerChoice === "paper"){
            console.log("player Loses");
            computerWins ++;
          }else{
            console.log("player Wins");
            playerWins++;
          }
        }
      }
    else{
      if (playerWins < computerWins){
        console.log("Game Over, Player Loses")
      }
      else if(playerWins === computerWins){
        console.log("Game Over, Tie")
      }
      else{
        console.log("Game Over, Player Wins")
      }
    }
  });
});