var input = require('input');
var dice = require('dice');

exports.guessTheNumber = function( player ){

  var randomNumber = dice.roll(6);

  var checkAnswer = function( guess ){

    if ( guess == randomNumber ) {
      player.sendMessage('You guessed correct!');
    }

    player.sendMessage('Thanks for playing');

  };

  input( player, 'Pick a number between 0 and 5', checkAnswer);
};
