let myNum = Math.floor((Math.random())*100)+1;
let userNum;
let previousGuesses = [];
let attempts = 10;

const guessInput = document.querySelector("#guess-input");
const submitBtn = document.querySelector("#submit-btn");
const message = document.querySelector("#message");
const guessess = document.querySelector("#previous-guesses");
const attempt = document.querySelector("#remaining-attempts");

guessInput.addEventListener("input", (e) => {
    userNum = Number(e.target.value);
});

submitBtn.addEventListener('click',(e)=>{
    if(myNum === userNum){
        message.innerText = "You guessed it Correct";
        attempt.innerText = '';
        previousGuesses =[];
        guessess.innerText = previousGuesses;
        input.disabled = true;
        submitBtn.disabled = true;
    }
    else{
        if(previousGuesses.length == 10-1){
            message.innerText = `Game Over..the random number was ${myNum}`;
            input.disabled = true;
            submitBtn.disabled = true;
        }
        else{
            if (userNum < 1 || userNum > 100) {
                message.innerText = "Enter a number between 1 and 100..";
            }
            else if(myNum > userNum){
                message.innerText = "Too low..";
                attempts--;
                attempt.innerText = attempts;
                previousGuesses.push(userNum);
                guessess.innerText = previousGuesses;
            }
            else if(myNum < userNum){
                message.innerText = "Too high.."
                attempts--;
                attempt.innerText = attempts;
                previousGuesses.push(userNum);
                guessess.innerText = previousGuesses;
            }
        }           
    }
})
