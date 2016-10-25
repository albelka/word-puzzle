var puzzle = [];

var makeArray = function(sentence){
  var sentenceArray = sentence.split("");
  return sentenceArray;
}

var insertDashes = function(sentence) {
  var sentenceArray2 = makeArray(sentence);

  for(var i = 0; i < sentenceArray2.length; i += 1 ) {
    if (sentenceArray2[i] === "a" || sentenceArray2[i] === "e" || sentenceArray2[i] === "i" || sentenceArray2[i] === "o" || sentenceArray2[i] === "u" ) {
      sentenceArray2[i] = "-";
    }
    }
    return sentenceArray2;
  }


$(document).ready(function(){
  $("form").submit(function(event){
    var inputSentence = $("input#sentence").val();
    var puzzle = insertDashes(inputSentence);
    var puzzle = puzzle.join(" ");

    $("#hidden").show();
    $("#dashed").text(puzzle);
    $(".disappear").hide();
    event.preventDefault();
  });
});
