    // Human choice
let computerAnswer = "none"
let humanAnswer = "none"
function getHumanChoice() {
    
    humanAnswer = prompt("Rock, Paper, or Scissors?")
    return humanAnswer
}

console.log(getHumanChoice())



    // Computer's Choice

function getComputerChoice() {

    return Math.random() * 30
}
// Rock
if (getComputerChoice() < 10) {
    computerAnswer = "Rock"

}
//Paper
else if (getComputerChoice() >= 10 && getComputerChoice() < 20) {

    computerAnswer = "Paper"

}
// Scissors
else 
    
    computerAnswer = "Scissors"



