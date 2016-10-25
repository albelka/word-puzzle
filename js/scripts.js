var makeArray = function(sentence){
  var sentenceArray =sentence.split("");
  return sentenceArray;
}

var insertDashes = function(sentenceArray) {
  for(i=0; i<sentenceArray.length; i++) {
    if(sentenceArray[i] === "a" || sentenceArray[i] === "e" || sentenceArray[i] === "i" || sentenceArray[i] === "o" || sentenceArray[i] === "u") {
      sentenceArray[i] = "-";
      var puzzle = sentenceArray.join();
      alert(sentenceArray);
      return puzzle;
    } else {
      return "Please enter a sentence with vowels!";
    }
    }
  }


$(document).ready(function(){
  $("form").submit(function(event){
    var inputSentence = $("input#sentence").val();
// console.log(inputSentence);
    // makeArray(inputSentence);
    insertDashes(makeArray(inputSentence));
      alert(puzzle);
    event.preventDefault();
  });
});
