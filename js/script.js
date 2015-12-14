$(document).ready(function() {
  rps = ["Rock", "Paper", "Scissors"];
  var playerChoice;
  var computerChoice;
  var computerWins = 0;
  var playerWins = 0;
  var round = 1;
  $("#paperIcon").hide();
  $("#scissorsIcon").hide();
  $(".animation").hide();
  $(".playerChoice").hide();
  $(".choiceText").hide();
  $(".winLoseText").hide();
  $("#roundNum").html("Round: "+round);
  $(".face").hide();

  setTimeout(entrancePaper, 300);
  function entrancePaper(){
    $("#paperIcon").show();
  }

  setTimeout(entranceScissors, 600);
  function entranceScissors(){
    $("#scissorsIcon").show();
  }

  setTimeout(tossing, 1000);
  function tossing(){
    $("#scissorsIcon").toggleClass("bigEntrance tossing");
    $("#rockIcon").toggleClass("bigEntrance tossing");
    $("#paperIcon").toggleClass("bigEntrance tossing");
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
    $("#rockIcon").hide();
    $("#scissorsIcon").hide();
    $(".animation").show();
    $(".rpsIcons").fadeOut("slow");
  }

  function animateChoices(playerChoice, computerChoice){
    playerChoiceId = "#playerChoice"+playerChoice;
    computerChoiceId = "#computerChoice"+computerChoice;
    $(playerChoiceId).delay(500).show(0);
    $(".choiceText").delay(500).fadeIn("slow");
    $(playerChoiceId).delay(1600).fadeOut("slow");
    $(".choiceText").delay(1000).fadeOut("slow");
    $(computerChoiceId).delay(500).show(0);
    $(computerChoiceId).delay(1600).fadeOut("slow");
    animateIn();
  }

  function animateIn(){
    $("#rockIcon").delay(2700).fadeIn("slow");
    $("#paperIcon").delay(2100).fadeIn("slow");
    $("#scissorsIcon").delay(2700).fadeIn("slow");
  }

  $(".playBtn").on("click", function(){
    if ($(this).attr("data-status") === "off"){
      $(this).toggleClass("btn-primary btn-danger");
      $(this).html("<i class='fa fa-pause-circle-o'></i> Pause");
      $(this).attr("data-status", "on");
    }else{
      $(this).toggleClass("btn-primary btn-danger");
      $(this).html("<i class='fa fa-play-circle-o'></i> Play");
      $(this).attr("data-status", "off");
    }
  })

  $("a").on("click", function(){
    playerChoice = $(this).attr("id");
    var ranNum = Math.floor(Math.random() * rps.length);
    computerchoice = computerTurn(ranNum);
    animateOut();
    animateChoices(playerChoice, computerChoice);
    if (round <= 5){
      round ++;
      $("#roundNum").html("Round: "+round);
      if (playerChoice === computerChoice){
        round --;
        $("#roundNum").html("Round: "+round);
        $(".winLoseText").html("Tie, try that round again!").delay(500).fadeIn("slow");
        $(".winLoseText").delay(1000).fadeOut("slow");
        $("#tieFace").delay(500).show(0);
        $("#tieFace").delay(1600).fadeOut("slow");
        GameOverCheck();
      }else if(playerChoice === "Rock"){
        if (computerChoice === "Paper"){
          computerWins ++;
          $(".winLoseText").html("Computer Wins This Round!").delay(500).fadeIn("slow");
          $(".winLoseText").delay(1000).fadeOut("slow");
          $("#lossFace").delay(500).show(0);
          $("#lossFace").delay(1600).fadeOut("slow");
          GameOverCheck();
        }else{
          playerWins++;
          $(".winLoseText").html("You Win This Round!").delay(500).fadeIn("slow");
          $(".winLoseText").delay(1000).fadeOut("slow");
          $("#winFace").delay(500).show(0);
          $("#winFace").delay(1600).fadeOut("slow");
          GameOverCheck();
        }
      }else if(playerChoice === "Paper"){
        if(computerChoice === "Scissors"){
          computerWins ++;
          $(".winLoseText").html("Computer Wins This Round!").delay(500).fadeIn("slow");
          $(".winLoseText").delay(1000).fadeOut("slow");
          $("#lossFace").delay(500).show(0);
          $("#lossFace").delay(1600).fadeOut("slow");         
          GameOverCheck();
        }else{
          playerWins++;
          $(".winLoseText").html("You Win This Round!").delay(500).fadeIn("slow");
          $(".winLoseText").delay(1000).fadeOut("slow");
          $("#winFace").delay(500).show(0);
          $("#winFace").delay(1600).fadeOut("slow");
          GameOverCheck();
        }
      }else if(playerChoice === "Scissors"){
        if(computerChoice === "Rock"){
          computerWins ++;
          $(".winLoseText").html("Computer Wins This Round!").delay(500).fadeIn("slow");
          $(".winLoseText").delay(1000).fadeOut("slow");
          $("#lossFace").delay(500).show(0);
          $("#lossFace").delay(1600).fadeOut("slow");
          GameOverCheck();
        }else{
          playerWins++;
          $(".winLoseText").html("You Win This Round!").delay(500).fadeIn("slow");
          $(".winLoseText").delay(1000).fadeOut("slow");
          $("#winFace").delay(500).show(0);
          $("#winFace").delay(1600).fadeOut("slow");
          GameOverCheck();
        }
      }
    }
    $("#playerScore").html(playerWins);
    $("#computerScore").html(computerWins);
  });
  
  function GameOverCheck(){
    if (round === 6){
    GameOver();
    }
  }

  function GameOver(){
  round = "Game Over";
  $("#roundNum").html("Round: "+round);
  $("a").off();
    if (playerWins < computerWins){
      console.log("Game Over, Player Loses")
      $("#lossModal").modal();
    }else{
      $("#winModal").modal();
    }
  }

  $(".playAgainBtn").on("click", function(){
    var computerWins = 0;
    var playerWins = 0;
    var round = 1;
    $("#roundNum").html("Round: "+round);
    $("#playerScore").html(playerWins);
    $("#computerScore").html(computerWins);
    $("a").on();
  })
});