
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var word = " ";
var words = ["bro","mountain","cameroon","nigeria","football","california"];
var guesses = 10;
var guessedLetters = [];
//
function startGame(){
    word = words[Math.floor(Math.random() * words.length)];
    printWord();
}

function printWord(){
    var retWord = " ";
    for(var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) === -1) {
            retWord += "_";
        } else {
            retWord += word[i]
        }
    }
        document.getElementById("guess").innerHTML = retWord;
    return retWord;
}
//
function guessLetter(){
var letter = document.getElementById("guessBox").value;
    guessedLetters.push(letter);
    printWord();
}


