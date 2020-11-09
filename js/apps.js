document.addEventListener('DOMContentLoaded', function() {

// picking a game type
  var gameType = document.getElementById('gameType');
  // var gameTypeContainer = document.getElementById('gameTypeContainer');
  var scoreContainer = document.getElementById('scoreContainer');

  gameType.addEventListener('change', event => {
    var dropDownValue = event.target.value;

    scoreContainer.innerHTML = ''; 

    scoreContainer.innerHTML += `
        <h2>Your score 0/${dropDownValue}</h2>
        <h2>Computer score 0/${dropDownValue}</h2>
        `; 
  });


// the game!
  var rock = document.getElementById('rock');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');

  var picksSection = document.getElementById("picks");
  var resultsSection = document.getElementById("results");

  function game(user) {
    picksSection.innerHTML = ""
    resultsSection.innerHTML = "";

    let comp = Math.floor(Math.random() * 3);

    // a function to switch the user and comp numbers into the correct name
    function pick(num) {
      switch (num) {
        case 0:
          return 'Rock';
        case 1:
          return 'Paper';
        case 2:
          return 'Scissors';
      }
    }

    let userAlt = pick(user);
    let compAlt = pick(comp);


    // this gives an initial statement of the user and comp choices
    picksSection.innerHTML += `
      <h2>You picked ${userAlt} and the computer picked ${compAlt}.</h2>
    `;    


    // this calculates and prints the game result!
    if (user === comp) {
      resultsSection.innerHTML += `
      <h2>It's a tie!</h2>
      `; 
    } else {
      let winningChoice = comp + 1;

      if (winningChoice > 2){
        winningChoice = 0
      }
        
      if (user === winningChoice) {
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