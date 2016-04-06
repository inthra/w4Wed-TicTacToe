// business logic
var winArray = ["XXX", "OOO"];



  // function to clear board ---------------
function resetBoard() {
    $("#a1, #a2, #a3, #b1, #b2, #b3, #c1, #c2, #c3").empty("");
}

// user interface logic
$(document).ready(function() {

  var mark = "X"


  $("#a1").click(function() {
    $("#a1").text(mark);
  });
  $("#a2").click(function() {
    $("#a2").text(mark);
  });

  $("#newGame").click(function(){
    resetBoard();
  });
});
