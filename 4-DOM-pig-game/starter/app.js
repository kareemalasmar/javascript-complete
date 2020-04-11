/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
rounScore = 0;
activePlayer = 1;

// change text content of html element
// document.querySelector('#current-' + activePlayer).textContent = dice;

// insert html into element
// document.querySelector('#current-' + activePlayer).innerHTML =
//   '<em>' + dice + '</em>';

// Store content of selected html element as variable
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// Change css of selected html element
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// Anonymous function: Doesn't have a name and can't be called outside this context
document.querySelector('.btn-roll').addEventListener('click', function () {
  // 1. Generate random number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  // 3. Update the round IF the rolled number was not a 1
});
