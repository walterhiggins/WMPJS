var greeting = require('greetings');
var greetPlayer = function( event ) {
  var player = event.player;
  var message = greeting.random() + player.name;
  player.sendMessage( message );
};
events.playerJoin( greetPlayer );
