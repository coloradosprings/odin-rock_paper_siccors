console.log(Math.floor(1.8))


let getComputerChoice = () => {
    numb = Math.floor(Math.random()*3+1)
    computerchoice = numb == 1 ? "rock" : numb == 2 ? "siccors": "paper"
    return computerchoice
} 

function playgame(s2){
    s1 = prompt("Rock Paper Siccors")
    playerSelection = s1.toLowerCase()
    computerSelection = s2.toLowerCase()
    a = "rock"
    b = "siccors"
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

function play(rounds = 5){
    playerScore = 0
    computerscore = 0
    for (let i = 0; i < rounds;i++) {
        console.log(i)
        r = playgame(getComputerChoice())
        r == r1 ? playerScore++ : r == r2 ? computerscore++ : 0
        if(i == 4)
        {if(playerScore > computerscore){
            return `player wins ! ${playerScore} : ${computerscore}`
        }
        else if(playerScore == computerscore){
            return `draw! ${playerScore} : ${computerscore}`
        }
        else{
            return `computer wins! ${computerscore} : ${playerScore}`
        }}

    }
}
console.log(play())