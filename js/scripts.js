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
// var checkMark = function(player, mark) {
//   if (player === 1) {
//     mark = "X";
//   }
//   else {
//     player = 2;
//     mark = "O";
//   }
// }

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

  // for (; notWinner;) {
    $("#1").click(function() {
      if (emptySpace($("#1").html())) {
        $("#1").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

    $("#2").click(function() {
      if (emptySpace($("#2").html())) {
        $("#2").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

    $("#3").click(function() {
      if (emptySpace($("#3").html())) {
        $("#3").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

    $("#4").click(function() {
      if (emptySpace($("#4").html())) {
        $("#4").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

    $("#5").click(function() {
      if (emptySpace($("#5").html())) {
        $("#5").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

    $("#6").click(function() {
      if (emptySpace($("#6").html())) {
        $("#6").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

    $("#7").click(function() {
      if (emptySpace($("#7").html())) {
        $("#7").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

    $("#8").click(function() {
      if (emptySpace($("#8").html())) {
        $("#8").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

    $("#9").click(function() {
      if (emptySpace($("#9").html())) {
        $("#9").text(mark);
        if (mark === "X") {
          mark = "O";
        }
        else if (mark === "O") {
          mark = "X";
        }
      }
    });

notWinner = false;

// this step need to check the winner

  // }  // end For loop section

  $("#newGame").click(function(){
    resetBoard();
  });
});
