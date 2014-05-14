var input = require('input');
var dice = require('dice');
var fireworks = require('fireworks');

exports.guessTheNumber = function( player ){

  var randomNumber = dice.roll(6);

  var checkAnswer = function( guess, guesser ){

    if ( guess == randomNumber ) {

      guesser.sendMessage('You guessed correct!');

      if ( guesser.player ) {
	
	fireworks.firework( guesser.location );

      }

    } else {

      guesser.sendMessage('Better luck next time.');

    }

    player.sendMessage('Thanks for playing');

  };

  input( player, 'Pick a number between 0 and 5', checkAnswer);
};
