var input = require('input');
var dice = require('dice');

exports.guessTheNumber = function( player ){

  var randomNumber = dice.roll(6);

  var checkAnswer = function( answer, guesser ){

    if ( answer == randomNumber ) {
      guesser.sendMessage('You guessed correct!');
    }

    guesser.sendMessage('Thanks for playing');

  };

  input( player, 'Pick a number between 0 and 5', checkAnswer);
};
