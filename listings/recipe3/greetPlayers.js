var greeting = require('greeting');
events.on( 'player.PlayerJoinEvent', function( listener, event ) {
  var player = event.player;
  var name = player.name;
  var message = greeting.random() + name;
  player.sendMessage( message );
});
