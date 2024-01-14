let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame = () => {
    msg.innerText = "It's a Draw!!";
    msg.style.backgroundColor = "purple";
}

const showWinner = (userwin, userChoice, CompChoice) => {
    if (userwin) {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You win! your ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You Lost! ${userChoice} beats your ${CompChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userChoice) => {
    console.log("userchoice = ", userChoice);
    const CompChoice = genCompChoice();
    console.log("Comp choice = ", CompChoice);

    if (userChoice == CompChoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = CompChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userwin = CompChoice === "scissors" ? false : true;
        }
        else {
            userwin = CompChoice === "rock" ? false : true;

        }

        showWinner(userwin, CompChoice, userChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was cliked", userChoice);
        playgame(userChoice);
    })
})