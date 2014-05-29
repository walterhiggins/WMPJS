var colorcodes = require('colorcodes');

var preferences = { players: { } };

function onChat( event ) { 
  var player = event.player;
  var playerChatColor = preferences[ player.name ];
  var colorCode = colorcodes.codes[ playerChatColor ] ;
  if ( playerChatColor ) {
    event.message = colorCode + event.message;
  }
}

function changeChatColor ( args, player ) {
  var color = args[0];
  if ( colorcodes.codes[color] ) {
    preferences[player.name] = color;
  } else {
    sender.sendMessage( color + ' is not a valid color' );
  }
}

events.asyncPlayerChat( onChat );
command( 'chatcolor', changeChatColor, colorcodes.colors );

