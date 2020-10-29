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
  

  function game(user) {
    picksSection.innerHTML = ""
    resultsSection.innerHTML = "";

    let comp = Math.floor(Math.random() * 3);


    picksSection.innerHTML += `
      <h2>You picked ${userSelection} and the computer picked ${compSelection}.</h2>
    `;    

    if (user == comp) {
      resultsSection.innerHTML += `
      <h2>It's a tie!</h2>
      `; 
    } else {
      let winningChoice = comp + 1;

      if (winningChoice > 2){
        winningChoice = 0
      }
        
      if (user = winningChoice) {
        resultsSection.innerHTML += `
        <h2>You win!</h2>
        `;
      } else {
        resultsSection.innerHTML += `
        <h2>You lose!</h2>
        `;
      }
    }
  }

  rock.addEventListener("click", function () {
    game(0); 
  });

  paper.addEventListener("click", function () {
    game(1); 
  });

  scissors.addEventListener("click", function () {
    game(2); 
  });


});