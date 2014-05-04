var input = require('input');
function onGuess( guess, repeat ) {
  if (guess == 'quit'){
    return;
  }
  guess = parseInt(guess);
  if (+guess === number){
    sender.sendMessage('Correct!');
  } else { 
    repeat();
  }
};
exports.numberGuess = function( sender ) { 
  var number = Math.ceil(Math.random() * 10);
  input( sender, 'Pick a number between 1 and 10', onGuess);
};
