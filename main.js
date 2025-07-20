function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    return (choice === 0) ? "rock"
        : (choice === 1) ? "paper"
        : "scissors";
}



function getHumanChoice(){
    let choice = prompt("1 - Rock\n2 - Paper\n3 - Scissors");
    return (choice === "1") ? "rock"
        : (choice === "2") ? "paper"
        : "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let tie = (humanChoice == computerChoice);
    let hRcP = humanChoice == "rock" && computerChoice == "paper";
    let hPcS = humanChoice == "paper" && computerChoice == "scissors";
    let hScR = humanChoice == "scissors" && computerChoice == "rock";

    if(tie){
        console.log("Tie!")
    } else if(hRcP || hPcS || hScR){
        computerScore++;
        console.log("You lose! You picked " + humanChoice + " and Computer picked " + computerChoice);
    } else if(!hRcP || !hPcS || !hScR){
        humanScore++;
        console.log("You Win! You picked " + humanChoice + " and Computer picked " + computerChoice);
    }
}

function playGame(){
    for(let i=1; i <=20; i++){
        playRound(getHumanChoice(), getComputerChoice());
        if(humanScore == 5){
            console.log("YOU WIN 5 ROUNDS!");
            break;
        } else if (computerScore == 5){
            console.log("Computer WINS 5 ROUNDS!");
            break;
        }
    }
}

