// GAME RULES
// *Program chooses a random number between min and max
// *Guess winning number
// *Each time you guess wrong number, number of chances decreases by 1
// *If correct guess, game over and you win and reset game
// *If all chances are over game over and you loose, display correct number and reset game


// game values
let min = 1,
max = 10,
winningNum = getRandomNum(min, max),
guessesLeft = 3;

//UI Variables
const game =  document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.getElementById("guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

//Assign min and max 
minNum.textContent = min;
maxNum.textContent = max;

//Play Again Event Listener
game.addEventListener("mousedown", function(e){
  if(e.target.className === "play-again"){
    window.location.reload();
  }

});

//listen for a guess
guessBtn.addEventListener("click", function(){
  let guess = parseInt(guessInput.value);

  //validate 
  if(isNaN(guess)|| guess<min || guess>max){
    setMessage(`please enter a number between ${min} and ${max}`, "green");
  }

  //check if won
  if(winningNum === guess){
    //game over you won
    gameOver(true, `${winningNum} is correct! You Win`);
  }
  //else lose
  else {
    guessesLeft -= 1;
    if(guessesLeft === 0) {
      //game over, you lost
     gameOver(false, `Game Over! You lost. The correct number was ${winningNum}`);
    }
    else {
      //game continues answer wrong

      //change border
    guessInput.style.borderColor = "red";
    //tell user wrong number
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, "red");
      //clear input
      guessInput.value = "";
    }
  }
});

function gameOver(won, msg){
  let color;
  won === true ? color = 'green': color = 'red';
  //disable input
  guessInput.disabled = true;
  //change border
  guessInput.style.borderColor = "green";
  //set message
  setMessage(msg, color);

  //Play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";

}
function setMessage(msg, color){
  message.textContent =  msg;
  message.style.color= color;
}

//generate random winning number
function getRandomNum(min, max){
let num =  Math.floor(Math.random()*(max-min+1)+min);
//console.log(num); //hint to win
return num;
}
      
