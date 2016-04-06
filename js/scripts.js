// business logic
var winArray = ["XXX", "OOO"];

  // function to check empty space --------------
var emptySpace = function(position) {
  if (position === "") {
    return true;
  }
  else {
    return false;
  }
}

  // function to check mark is X or O --------------
var checkMark = function(player, mark) {
  if (player === 1) {
    mark = "X";
  }
  else {
    player = 2;
    mark = "O";
  }
}

// var boardNotFull = function(allPosition) {
//   allPosition.map(function(i) {
//     if (i === "") {
//       return true;
//     }
//     else {
//       return false;
//     }
//   });
// }

  // function to clear board ---------------
function resetBoard() {
    $("td").empty("");
}

// user interface logic
$(document).ready(function() {
  var player = 1;
  var mark = "X";
  var notWinner = true;

  for (; notWinner;) {
    $("#a1").click(function() {
      if (emptySpace) {
        $("#a1").text(mark);
      }
    });

    notWinner = false;  // this line is for temporary stop the loop. it will be deleted soon.

// this step need to check the winner


// this step is to check the mark character before go to the next loop
    if (mark === "X") {
      mark = "O";
    }
    else (mark === "O") {
      mark = "X";
    }
  }  // end loop section

  $("#newGame").click(function(){
    resetBoard();
  });
});
