// insert game here...

/* this is how the game should flow:

  user picks rock/paper/scissors 

  using Math.random to generate random number b/w 0 and 1
  
  if or switch-statement --> 
    if math.random is up to 0.33 - rock, 
    if b/w 0.34-0.66 - paper, 
    if 0.67 or higher - scissors

  compare user result to computer result

  alert or add div/text of some kind to say "you win" or "you lose"

  add score keeping mechanism... maybe best of 3 or first to 5 wins?

  add functionality to add their name to a leader board?
*/



document.addEventListener('DOMContentLoaded', function() {

  // grabbing all the html elements and storing into variables
  var rock = document.getElementById('rock');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');
  var resultsSection = document.getElementById("results");

  function game(userSelection) {
    resultsSection.innerHTML = "";
    let compSelection = '';
    let randomNum = Math.floor(Math.random() * 3) + 1;

    // this if statement will decide what option the computer picked
    switch (randomNum) {
      case 1: 
        compSelection = 'Rock';
        break;
      case 2: 
        compSelection = 'Paper';
        break;
      case 3: 
        compSelection = 'Scissors';
        break;
    }
    

    //  this if statement will compare the userSelection with the compSelection (also this is the rough draft but there will be a nicer way to do this)
    if (userSelection === compSelection) {
      resultsSection.innerHTML += `
      <h2>"You picked ${userSelection} and the computer picked ${compSelection}. It's a tie!"</h2>
      `;    
    } else if ((userSelection === 'Rock' && compSelection === 'Paper') || (userSelection === 'Paper' && compSelection === 'Scissors') || (userSelection === 'Scissors' && compSelection === 'Rock')) {
      resultsSection.innerHTML += `
      <h2>"You picked ${userSelection} and the computer picked ${compSelection}. You lose!"</h2>
      `;
    } else if ((userSelection === 'Paper' && compSelection === 'Rock') || (userSelection === 'Scissors' && compSelection === 'Paper') || (userSelection === 'Rock' && compSelection === 'Scissors')) {
      resultsSection.innerHTML += `
      <h2>"You picked ${userSelection} and the computer picked ${compSelection}. You win!"</h2>
      `;
    }
  }

  rock.addEventListener("click", function () {
    game('Rock'); 
    // is this enough for the game to run?
  });

  paper.addEventListener("click", function () {
    game('Paper'); 
    // is this enough for the game to run?
  });

  scissors.addEventListener("click", function () {
    game('Scissors'); 
    // is this enough for the game to run?
  });

});