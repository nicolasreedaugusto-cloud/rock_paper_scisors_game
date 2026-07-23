# rock_paper_scisors_game

This rock paper scisor game will be played on the console. Here is the plan. 

--- Human's Choice ---
The player will put and answer in the prumpt()

--- Computer's choice ---

The computer will pick a number grater then or equal to zero and less then 1 (With Math.random). I will multiply this number by 30. 

IF 
the number is <= 9 , it will return Rock

IF ELSE 
the number is >= 10 and <= 19, it will return Paper

IF ELSE 
the number is >= 20 and < 30, it will return Scisors

ELSE
Error Message.

--- Keeping score ---

To keep score, there will be two variables:

*humanScore* and *computerScore*

--- Rounds ---
Create a function to play a round (playRound) - Then define parameter playRound: humanChoice, computerChoice
MAKE SURE FUNCTIONS ARE CASE-INSESITIVE
Write code to represent winner or looser with consolde.log()
Also mark the winner and loser on humanScore and computerScore

--- Full game ---
The game will have 5 rounds. 
Create playGame function

playRound should be inside playGame

Play 5 rounds by calling playGame 5 times.

