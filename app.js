let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice() {
    const choices = ["r", "s", "p"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertChoiceToWord(choice) {
    switch (choice) {
        case "r":
            return "Rock";
            break;
        case "s":
            return "Scissors";
            break;
        case "p":
            return "Paper";
            break;
    }
}

function win(userChoice, computerChoice) {
    userScore_span.innerHTML++;
    result_p.innerHTML = `${convertChoiceToWord(userChoice)} beats ${convertChoiceToWord(computerChoice)}. You win!`;
    document.getElementById(userChoice).classList.add("green");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green"), 1000);
}

function lose(userChoice, computerChoice) {
    compScore_span.innerHTML++;
    result_p.innerHTML = `${convertChoiceToWord(userChoice)} loses to ${convertChoiceToWord(computerChoice)}. You lost!`;
    document.getElementById(userChoice).classList.add("red");
    setTimeout(() => document.getElementById(userChoice).classList.remove("red"), 1000);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertChoiceToWord(userChoice)} equals ${convertChoiceToWord(computerChoice)}. It's a draw!`;
    document.getElementById(userChoice).classList.add("gray");
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray"), 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    scissors_div.addEventListener('click', () => game("s"));
    paper_div.addEventListener('click', () => game("p"));
}

main();
