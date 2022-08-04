
const buttons = document.querySelectorAll('button')
const score = document.createElement('div')
const div = document.createElement('div') 
const para = document.createElement('p') 


score.classList.add('score')
para.classList.add('score')
div.classList.add('score')

function playSelection(e){
    selection = e.path[1].classList[0]
    result = playgame(selection) 
    Game(result)  
}

let playerScore = 0
let computerScore = 0
score.textContent = '0 : 0'
let round = 0

document.body.appendChild(score)
function Game(result){
    
    round += 1
    console.log(round)
    if(result == r2){
        playerScore += 1
    }
    else if(result == r3){
        computerScore += 1
    }
    else{}
    

    score.textContent = `${playerScore} : ${computerScore}`;
    para.textContent = `${result}`;
    score.appendChild(para);
    round >= 5 ? reset(playerScore,computerScore) : NaN

}
function imageScale(e){(
    console.log(e)
)}
buttons.forEach((button) => {
    button.addEventListener('click',playSelection)
    button.addEventListener("mouseover",imageScale)
})


let reset = function(player,computer){
    round = 0 
    score.textContent = ''
    para.textContent = ''
    score.appendChild(div)
    playerScore = 0
    computerScore = 0
    if(computer > player){
        div.textContent = `computer wins! Final score: ${player} : ${computer}`        
    }
    else if(computer < player){
        div.textContent = `player wins! Final score: ${player} : ${computer}`        
    }
    else{
        div.textContent = `it's a draw! Final score: ${player} : ${computer}`
    }
  

}

let getComputerChoice = () => {
    numb = Math.floor(Math.random()*3+1)
    computerchoice = numb == 1 ? "rock" : numb == 2 ? "sciccors": "paper"
    return computerchoice
} 

function playgame(s1,s2 = getComputerChoice()){
    playerSelection = s1.toLowerCase()
    computerSelection = s2.toLowerCase()
    a = "rock"
    b = "sciccors"
    c = "paper"
    console.log(computerSelection,playerSelection)
    r1 = `It's even! ${playerSelection} and ${computerSelection}`
    r2 =`You win! ${playerSelection} beats ${computerSelection}`
    r3 =`You lose! ${computerSelection} beats ${playerSelection}`
    if(playerSelection == computerSelection){
    return r1 
    }
    else{
        if(playerSelection == a && computerSelection == b ||
            playerSelection == b && computerSelection == c
            || playerSelection == c && computerSelection == a){
                return r2 
            }
        else{
            return r3 
        }
    }
}



    

