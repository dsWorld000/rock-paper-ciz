let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userCount = document.querySelector('#user-score');
const compCount = document.querySelector('#comp-score');




const drawGame = ()=>{
    console.log("game was draw")
       msg.innerText = "Game draw, Play again"
       msg.style.backgroundColor = 'gray';
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
       console.log("You Won")
       msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`
       msg.style.backgroundColor = 'green';
       userCount.innerText = ++userScore;
    }else{
        console.log("You Lose")
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`
       msg.style.backgroundColor = 'red';
       compCount.innerText = ++compScore;
    }
}

const playGame = (userChoice)=>{
     console.log('user choices', userChoice);
     //Generate Computer Choice
     const compChoice = genCompChoice();
     console.log('comp choice =',compChoice)  

     if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
           userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const genCompChoice = ()=>{
    const options = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})