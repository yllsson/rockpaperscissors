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

  var picksSection = document.getElementById("picks");
  var resultsSection = document.getElementById("results");
  

  function game(userSelection) {
    picksSection.innerHTML = ""
    resultsSection.innerHTML = "";

    let compSelection = '';
    let randomNum = Math.floor(Math.random() * 3);

    // this if statement will decide what option the computer picked
    switch (randomNum) {
      case 0: 
        compSelection = 'Rock';
        break;
      case 1: 
        compSelection = 'Paper';
        break;
      case 2: 
        compSelection = 'Scissors';
        break;
    }

    picksSection.innerHTML += `
      <h2>You picked ${userSelection} and the computer picked ${compSelection}.</h2>
    `;    

    //  this if statement will compare the userSelection with the compSelection (also this is the rough draft and i will find a nicer way to do this)
    if (userSelection === compSelection) {
      resultsSection.innerHTML += `
      <h2>It's a tie!</h2>
      `;    
    } else if ((userSelection === 'Rock' && compSelection === 'Paper') || (userSelection === 'Paper' && compSelection === 'Scissors') || (userSelection === 'Scissors' && compSelection === 'Rock')) {
      resultsSection.innerHTML += `
      <h2>You lose!</h2>
      `;
    } else if ((userSelection === 'Paper' && compSelection === 'Rock') || (userSelection === 'Scissors' && compSelection === 'Paper') || (userSelection === 'Rock' && compSelection === 'Scissors')) {
      resultsSection.innerHTML += `
      <h2>You win!</h2>
      `;
    }

  }

  rock.addEventListener("click", function () {
    game('Rock'); 
  });

  paper.addEventListener("click", function () {
    game('Paper'); 
  });

  scissors.addEventListener("click", function () {
    game('Scissors'); 
  });


  
  /* Alternate solution

    let compSelection = Math.floor(Math.random() * 3);

    // 0 = rock
    // 1 = paper
    // 2 = scissors

    if userSelection is 0 and compSelection is 1 comp wins...

    user needs to get one higher than comp to win.

    so if (userSelection === compSelection + 1) user wins
    and if (userSelection === compSelection - 1) comp wins

    OR maybe

    if (userSelection > compSelection) user wins
    and if (userSelection < compSelection) comp wins

    but these don't account for whenever compselection is scissors or when userselection is rock... hmmmm
  
  */

});