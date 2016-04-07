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

  // function to change player --------------
var checkPlayer = function(mark){
  if (mark === "X") {
    return mark = "O";
  }
  else if (mark === "O") {
    return mark = "X";
  }
}

// user interface logic
$(document).ready(function() {
  var player = "X";

  $("#1").click(function() {
        if (emptySpace($("#1").text())) {
          $("#1").text(player);

          player = checkPlayer(player);

        }
      });

      $("#2").click(function() {
        if (emptySpace($("#2").text())) {
          $("#2").text(player);
          player = checkPlayer(player);
        }
      });

      $("#3").click(function() {
        if (emptySpace($("#3").text())) {
          $("#3").text(player);
          player = checkPlayer(player);
        }
      });

      $("#4").click(function() {
        if (emptySpace($("#4").text())) {
          $("#4").text(player);
          player = checkPlayer(player);
        }
      });

      $("#5").click(function() {
        if (emptySpace($("#5").text())) {
          $("#5").text(player);
          player = checkPlayer(player);
        }
      });

      $("#6").click(function() {
        if (emptySpace($("#6").text())) {
          $("#6").text(player);
          player = checkPlayer(player);
        }
      });

      $("#7").click(function() {
        if (emptySpace($("#7").text())) {
          $("#7").text(player);
          player = checkPlayer(player);
        }
      });

      $("#8").click(function() {
        if (emptySpace($("#8").text())) {
          $("#8").text(player);
          player = checkPlayer(player);
        }
      });

      $("#9").click(function() {
        if (emptySpace($("#9").text())) {
          $("#9").text(player);
          player = checkPlayer(player);
        }
      });


  $("#newGame").click(function(){
    $("td").empty("");
  });

});
