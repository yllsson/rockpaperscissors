document.addEventListener('DOMContentLoaded', function() {
// declaring all my variables  
  var gameType = document.getElementById('gameType');
  var scoreContainer = document.getElementById('scoreContainer');
  var userScore = document.getElementById('userScore');
  var compScore = document.getElementById('compScore');
  var userDropDownValue = document.getElementById('userDropDownValue')
  var compDropDownValue = document.getElementById('compDropDownValue')


  var rock = document.getElementById('rock');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');

  var picksSection = document.getElementById("picks");
  var resultsSection = document.getElementById("results");

  var userWinCount = 0;
  var compWinCount = 0;
  

// picking a game type

  gameType.addEventListener('change', event => {
    var ddValue = event.target.value;

    userDropDownValue.innerText = ''; 
    compDropDownValue.innerText = ''; 

    userDropDownValue.innerText += `${ddValue}`; 
    compDropDownValue.innerText += `${ddValue}`; 
  });

// the game!


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
        userWinCount++ 
      } else {
        resultsSection.innerHTML += `
        <h2>You lose!</h2>
        `;
        compWinCount++
      }
    }
  }

  rock.addEventListener("click", function () {
    game(0); 
    userScore.innerText = `${userWinCount}`;
    compScore.innerText = `${compWinCount}`;
  });

  paper.addEventListener("click", function () {
    game(1); 
    userScore.innerText = `${userWinCount}`;
    compScore.innerText = `${compWinCount}`;
  });

  scissors.addEventListener("click", function () {
    game(2); 
    userScore.innerText = `${userWinCount}`;
    compScore.innerText = `${compWinCount}`;
  });

});

