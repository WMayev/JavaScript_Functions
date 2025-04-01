console.log('Hi! Would you like to play a game?');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    // Changes the user input to a small letter.

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'
        || userInput === 'bomb') {
            /* Check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
            Or cheated answer */
            return userInput
        } else {
            console.log('You have to choose: rock, paper or scissors.');
        }
}

const getComputerChoice = computerNumber => {
    computerNumber = Math.floor(Math.random()* 3);
    // Get number from 0 to 2.
    
    if (computerNumber === 0) {
        return 'rock';
      } else if (computerNumber === 1) {
        return 'paper';
      } else {
        return 'scissors';
      }
}