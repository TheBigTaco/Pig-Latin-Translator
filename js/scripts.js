function pigLatinizer(sentence) {
  var output = ""
  var inputArray = sentence.split(" ");
  inputArray.forEach(function(word){
    var wordArray = word.split("")
    for (i=0; i<word.length; i++){
      var letter = wordArray[i]
      if (letter.match(/(a|e|i|o|u|q)/gi)) {
        if (letter.match(/(q)/gi)) {
          var quack = wordArray[i+1];
          wordArray.push(letter + quack);
          wordArray.push("ay");
          wordArray.splice(0,2);
          break;
        } else if (word.match(/^(a|e|i|o|u)/gim)) {
          wordArray.push("way");
          break;
        } else {
          wordArray.push("ay");
          wordArray.splice(0,i);
          break;
        }
      } else {
        wordArray.push(letter);
      }
    };
    if (sentence.match(/[0-9]/g)){
      output = "Orrysay, Iway on'tday orkway ithway umbersnay!"
    } else {
      output = output + wordArray.join("") + " ";
    }
  });
  return output;
}

$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    $(".output").show()
    $("#thepanel").hide()
    $(".output").append('" ' + pigLatinizer(userInput) + '"');
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
