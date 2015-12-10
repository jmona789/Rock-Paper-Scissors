$(document).ready(function() {
  rps = ["rock", "paper", "scissors"];
  var playerChoice;
  var computerChoice;
  var computerWins = 0;
  var playerWins = 0;
  var round = 0;
  $("#paper").hide();
  $("#scissors").hide();
  $(".animation").hide();

  setTimeout(entrancePaper, 300);
  function entrancePaper(){
    $("#paper").show();
  }

  setTimeout(entranceScissors, 600);
  function entranceScissors(){
    $("#scissors").show();
  }

  setTimeout(tossing, 1000);
  function tossing(){
    $("#scissors").toggleClass("bigEntrance tossing");
    $("#rock").toggleClass("bigEntrance tossing");
    $("#paper").toggleClass("bigEntrance tossing");
  }

  //Changes animation on mouse enter and changes back on mouse out
  $(".shown").on("mouseenter", function(){
    $(this).toggleClass("tossing");
  });
  $(".shown").on("mouseleave", function(){
    $(this).toggleClass("tossing");
  });

  function computerTurn(ranNum){
    computerChoice = rps[ranNum];
    return computerChoice;
  }

  function animateOut(){
    $("#rock").hide();
    $("#scissors").hide();
    $(".animation").show();
    $(".rpsIcons").fadeOut("slow");
    animateIn();
  }

  function animateIn(){
    $("#rock").delay(700).fadeIn("slow");
    $("#paper").delay(100).fadeIn("slow");
    $("#scissors").delay(700).fadeIn("slow");
  }

  $("a").on("click", function(){
    animateOut();
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
      }else{
        $("a").off();
      if (playerWins < computerWins){
        console.log("Game Over, Player Loses")
      }else if(playerWins === computerWins){
        console.log("Game Over, Tie");
      }else{
        console.log("Game Over, Player Wins");
      }
    }
  });
});