// variables    
let computerChoice = "none"
let humanAnswer = "none"
let humanScore = 0
let computerScore = 0

// Human choice

async function playGame(){

    function playRound() {
        
        function getHumanChoice() {
            
            humanAnswer = prompt("Rock, Paper, or Scissors?")
            humanAnswer = humanAnswer.toUpperCase()
            humanAnswer = humanAnswer.charAt(0).toUpperCase() + humanAnswer.slice(1).toLowerCase();
            return humanAnswer

        }


        humanChoice = getHumanChoice()
        console.log(humanAnswer)

            // Computer's Choice

        function getComputerChoice() {

            return Math.random() * 30
        }
        // Rock
        if (getComputerChoice() < 10) {
            computerChoice = "Rock"

        }
        //Paper
        else if (getComputerChoice() >= 10 && getComputerChoice() < 20) {

            computerChoice = "Paper"

        }
        // Scissors
        else {    
            computerChoice = "Scissors"
        }

        console.log(computerChoice)


            // Score keeping
        
        if (humanChoice == computerChoice) {
            
            console.log("It's a tie!")
            humanScore += 0
            computerScore += 0

        }

        if (humanChoice == "Rock" && computerChoice == "Paper") {
            console.log("You Lose!")
            computerScore += 1 
        }

        if (humanChoice == "Rock" && computerChoice == "Scissors") {
            console.log("You Win!")
            humanScore += 1 
        }

        if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("You Win!")
            humanScore += 1 
        }

        if (humanChoice == "Paper" && computerChoice == "Scissors") {
            console.log("You Lose!")
            computerScore += 1 
        }

        if (humanChoice == "Scissors" && computerChoice == "Rock") {
            console.log("You Lose!")
            computerScore += 1 
        }
        if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("You Win!")
            humanScore += 1 
        }

        console.log ("Your score is " + humanScore)
        console.log ("My score is " + computerScore)
    }
    playRound()
    await new Promise(resolve => setTimeout(resolve, 5000));

    playRound()
    await new Promise(resolve => setTimeout(resolve, 5000));

    playRound()
    await new Promise(resolve => setTimeout(resolve, 5000));

    playRound()
    await new Promise(resolve => setTimeout(resolve, 5000));

    playRound()
    


    console.log("Your total score was " + humanScore)
    console.log("My total score was " + computerScore)

    if (humanScore > computerScore) {
        console.log ("You win! Congratulations!")
    } 

    else if (humanScore == computerScore) {
        console.log ("I can't beleive you tied! Break the tie by trying again!")
    }
    else {
        console.log ("You Lose! Try again. ):")
    }
}

playGame()
