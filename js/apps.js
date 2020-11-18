document.addEventListener('DOMContentLoaded', function() {
// declaring all my variables  
  // header and main variables
  var newGame = document.getElementById('newGame');
  var mainContainer = document.getElementById('mainContainer');

  // game type variables
  var gameType = document.getElementById('gameType');
  var userDropDownValue = document.getElementById('userDropDownValue');
  var compDropDownValue = document.getElementById('compDropDownValue');
  var ddValue;
  
  // game specific variables
  var rock = document.getElementById('rock');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');
  var userScore = document.getElementById('userScore');
  var compScore = document.getElementById('compScore');
  var userWinCount = 0;
  var compWinCount = 0;

  // scoreboard variables
  var makeYourChoice = document.getElementById('makeYourChoice');
  var picks = document.getElementById("picks");
  var results = document.getElementById("results");

  // game end variable
  var gameEnd = document.getElementById('gameEnd');


// starting a game
  newGame.addEventListener('click', event => {
    resetGame();
    mainContainer.style.display = 'flex';
    mainContainer.style.flexDirection = 'column';
    mainContainer.style.justifyContent = 'center';
    mainContainer.style.alignItems = 'center';
    makeYourChoice.innerHTML = `<h2>Make your choice!</h2>`;
  })

  function resetGame(){
    mainContainer.style.display = 'none';
    mainContainer.style.flexDirection = '';
    mainContainer.style.justifyContent = '';
    mainContainer.style.alignItems = '';
    gameType.selectedIndex = 0;
    resetScore();
  }

  function resetScore(){
    picks.innerHTML = ''
    results.innerHTML = '';
    gameEnd.innerHTML = ''
    userScore.innerText = '';
    compScore.innerText = '';
    userDropDownValue.innerText = ''; 
    compDropDownValue.innerText = ''; 

    userWinCount = 0;
    compWinCount = 0;
  }

// picking a game type

  gameType.addEventListener('change', event => {
    resetScore()
    ddValue = event.target.value;

    userDropDownValue.innerText = ''; 
    compDropDownValue.innerText = ''; 

    if(ddValue > 1){
      userDropDownValue.innerText += `/${ddValue}`; 
      compDropDownValue.innerText += `/${ddValue}`; 
    } 
  });


// the game!

  function game(user) {
    makeYourChoice.innerHTML = '';
    picks.innerHTML = "";
    results.innerHTML = "";

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
    picks.innerHTML += `
      <h2>You picked ${userAlt} and the computer picked ${compAlt}.</h2>
    `;    


    // this calculates and prints the game result!
    if (user === comp) {
      results.innerHTML += `
      <h2>It's a tie!</h2>
      `; 
    } else {
      let winningChoice = comp + 1;

      if (winningChoice > 2){
        winningChoice = 0
      }
        
      if (user === winningChoice) {
        results.innerHTML += `
        <h2>You win!</h2>
        `;
        userWinCount++ 
      } else {
        results.innerHTML += `
        <h2>You lose!</h2>
        `;
        compWinCount++
      }
    }

    if(userWinCount == ddValue){
      resetGame();
      gameEnd.innerHTML = `<h3>You beat the computer! You're amazing!</h3>`
    } else if (compWinCount == ddValue){
      resetGame();
      gameEnd.innerHTML = `<h3>The computer beat you! Aww man...</h3>`
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

