let humanScore = 0;
let computerScore = 0;

const p_score = document.querySelector(".player-score");
p_score.textContent = humanScore;
const c_score = document.querySelector(".computer-score");
c_score.textContent = computerScore;

const info = document.querySelector(".info");
info.textContent = "WELCOME!"

const p_pick = document.querySelector(".player-pick");
p_pick.textContent = ("-----")
const c_pick = document.querySelector(".computer-pick");
c_pick.textContent = ("-----")

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    return (choice === 0) ? "rock"
        : (choice === 1) ? "paper"
        : "scissors";
}


function getHumanChoice() {
    return new Promise(resolve => {
        rockBtn.addEventListener("click", () => resolve("rock"), { once: true });
        paperBtn.addEventListener("click", () => resolve("paper"), { once: true });
        scissorsBtn.addEventListener("click", () => resolve("scissors"), { once: true });
    });
}


function playRound(humanChoice, computerChoice){
    let tie = (humanChoice == computerChoice);
    let hRcP = humanChoice == "rock" && computerChoice == "paper";
    let hPcS = humanChoice == "paper" && computerChoice == "scissors";
    let hScR = humanChoice == "scissors" && computerChoice == "rock";

    if(tie){
        info.textContent = ("Tie!")
    } else if(hRcP || hPcS || hScR){
        computerScore++;
        c_score.textContent = computerScore;
        info.textContent = ("You lose! You picked " + humanChoice + " and Computer picked " + computerChoice);
    } else if(!hRcP || !hPcS || !hScR){
        humanScore++;
        p_score.textContent = humanScore;
        info.textContent = ("You Win! You picked " + humanChoice + " and Computer picked " + computerChoice);
    }
}

async function playGame(){
    for(let i=1; i <=20; i++){
        let p_choice = await getHumanChoice();
        let c_choice = getComputerChoice();
        p_pick.textContent = p_choice.toUpperCase();
        c_pick.textContent = c_choice.toUpperCase();


        playRound(p_choice, c_choice);
        if(humanScore == 5){
            info.textContent = ("YOU WIN 5 ROUNDS!");
            break;
        } else if (computerScore == 5){
            info.textContent = ("Computer WINS 5 ROUNDS!");
            break;
        }
    }
}

playGame();

