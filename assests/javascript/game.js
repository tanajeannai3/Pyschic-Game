var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
              "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var remainingGuesses = 10;

document.onkeyup = function(event) {
    var userGuess = event.key;
    var randomLetter = letter[Math.floor(Math.random() * letter.length)];
    console.log(randomLetter);

    for(var i = 0; i < randomLetter.length; i++){
        if(randomLetter == userGuess){
            console.log("You are a pyschic!");
            wins++;
        }else{
            losses++;
            remainingGuesses--;
        }
        break;
    }//END FOR

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var remainingGuessesText = document.getElementById("remainingGuesses-text");
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    userChoiceText.textContent = "Letters Already Guessed: " + userGuess;
    remainingGuessesText.textContent = "Number of Guesses Remaining: " + remainingGuesses;
};//END FUNCTION 