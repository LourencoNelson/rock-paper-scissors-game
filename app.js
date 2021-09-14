let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("score-board");
const result_div = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    let computerChoices = ["r", "p", "s"];
    let choice = (Math.floor(Math.random() * 3));
    return computerChoices[choice];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor"
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 400);

}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 400);
}

function draw(userChoice, computerChoice){
    
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 400);
}

function game(userChoice){
    
    let computerChoice = getComputerChoice();
    let result = userChoice + computerChoice;

    switch(result){
        case "sp" : 
        case "pr" :
        case "rs" :
            win(userChoice, computerChoice);
            break;

        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        default: draw(userChoice, computerChoice);
    }
}

function main(){

    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
        
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    });

}

main();