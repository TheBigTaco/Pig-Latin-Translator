var output = ""

function pigLatinizer(sentence) {
  output = ""
  var inputArray = sentence.split(" ");
  inputArray.forEach(function(word){
    var wordArray = word.split("")
    for (i=0; i<word.length; i++){
      var letter = wordArray[i]
      if ("a" === letter || "e" === letter || "i" === letter || "o" === letter || "u" === letter || "q" === letter || "A" === letter || "E" === letter || "I" === letter || "O" === letter || "U" === letter || "Q" === letter) {
        if (i === 0){
          if (letter === "q" || letter === "Q") {
            var quack = wordArray[i+1];
            wordArray.push(letter + quack);
            wordArray.push("ay");
            wordArray.splice(0,2);
            break;
          } else {
            wordArray.push("way");
            break;
          }
        } else {
          wordArray.push("ay");
          wordArray.splice(0,i);
          break;
        }
      } else {
        wordArray.push(letter);
      }
    };
    output = output + wordArray.join("") + " ";
  });
  return output;
}

$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $(".output").text(pigLatinizer(userInput));
  });
});


/*
[x] build inputter to separate string into individual words
[x] build a vowel vs consonant checker
[x] build device to move past each consonant to check for multiple consonant beginnings (and account for 1, 2, 3, etc consonant beginnings)
[x] build device to shift consonants to the end of each words
[x] build device to suffix each modified word with "ay"
[x] build a device to move along through each word
thanks anksthay
*/
