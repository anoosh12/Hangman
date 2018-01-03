var word = " ";
var words = ["mountain","cameroon","california"];
var guesses = 8;
var guessedLetters = [ ];


function startGame(){
    guessedLetters = [ ];
    word = document.getElementById("pickDifficulty").value;
    printWord();
    console.log(word);
    console.log(guessedLetters);
}

function guessLetter(){
    var guessed = "";
    var win = "" ;
    var letter = document.getElementById("guessBox").value;
    var guessRight = checkGuesses(letter);
    if(guessRight === true) {
        guessedLetters.push(letter);
        var underscoreWord = printWord();
        if(underscoreWord.indexOf("_") === -1){
            win += "You Win!";
        }
        document.getElementById("winner").innerHTML = win;
        lowerGuesses(letter);
        document.getElementById("guessedLetters").innerHTML = guessed + "Letters Guessed: " + guessedLetters;
        document.getElementById("alreadyGuessed").innerHTML = "";
    }

}

function printWord() {
    var retWord = " ";
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) === -1) {
            retWord += "_ ";
        } else {
            retWord += word[i];
        }
    }
    console.log(retWord);
    document.getElementById("guessed").innerHTML = retWord;
    return retWord;
}

function checkGuesses(letter){
    var incorrect = " ";
    if(guessedLetters.indexOf(letter) !== -1) {
        incorrect += " You already guessed that letter!! ";
        document.getElementById("alreadyGuessed").innerHTML = incorrect;
        return false;
    }else{
        return true;
    }

}

function lowerGuesses(letter){
    var lose = " ";
    var retGuesses = " ";
    if(word.indexOf(letter) === -1){
        guesses--;
    }
    document.getElementById("guesses").innerHTML = retGuesses + "Guesses Remaining:" + guesses;
    if(guesses === 0){
        lose += "Unfortunately, You have Lost.";
    }
    document.getElementById("loser").innerHTML = lose;
}

