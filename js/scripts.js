// business logic
var winArray = ["XXX", "OOO"];

  // constructors player
function Player(name, mark) {
  this.name = name;
  this.mark = mark;
}

  // function to check empty space --------------
var emptySpace = function(position) {
  if (position === "") {
    return true;
  }
  else {
    return false;
  }
}

// function to change player --------------
var switchPlayer = function(current, temp1, temp2){
  if (temp1 === current) {
    return current = temp2;
  }
  else {
    return current = temp1;
  }
}

//   // function to change player --------------
// var checkPlayer = function(mark){
//   if (mark === "X") {
//     return mark = "O";
//   }
//   else if (mark === "O") {
//     return mark = "X";
//   }
// }

// user interface logic  ---------------
$(document).ready(function() {
  // var player = "X";
  var player1 = new Player("Leroi", "X");
  var player2 = new Player("Summer", "O");
  var currentPlayer = player1;

  $("#1").click(function() {
    if (emptySpace($("#1").text())) {
      $("#1").text(currentPlayer.mark);

      currentPlayer = switchPlayer(currentPlayer, player1, player2);

    }
  });

  $("#2").click(function() {
    if (emptySpace($("#2").text())) {
      $("#2").text(currentPlayer.mark);
      currentPlayer = switchPlayer(currentPlayer, player1, player2);
    }
  });

  $("#3").click(function() {
    if (emptySpace($("#3").text())) {
      $("#3").text(currentPlayer.mark);
      currentPlayer = switchPlayer(currentPlayer, player1, player2);
    }
  });

  $("#4").click(function() {
    if (emptySpace($("#4").text())) {
      $("#4").text(currentPlayer.mark);
      currentPlayer = switchPlayer(currentPlayer, player1, player2);
    }
  });

  $("#5").click(function() {
    if (emptySpace($("#5").text())) {
      $("#5").text(currentPlayer.mark);
      currentPlayer = switchPlayer(currentPlayer, player1, player2);
    }
  });

  $("#6").click(function() {
    if (emptySpace($("#6").text())) {
      $("#6").text(currentPlayer.mark);
      currentPlayer = switchPlayer(currentPlayer, player1, player2);
    }
  });

  $("#7").click(function() {
    if (emptySpace($("#7").text())) {
      $("#7").text(currentPlayer.mark);
      currentPlayer = switchPlayer(currentPlayer, player1, player2);
    }
  });

  $("#8").click(function() {
    if (emptySpace($("#8").text())) {
      $("#8").text(currentPlayer.mark);
      currentPlayer = switchPlayer(currentPlayer, player1, player2);
    }
  });

  $("#9").click(function() {
    if (emptySpace($("#9").text())) {
      $("#9").text(currentPlayer.mark);
      currentPlayer = switchPlayer(currentPlayer, player1, player2);
    }
  });

  $("#newGame").click(function(){
    $("td").empty("");
  });

});
