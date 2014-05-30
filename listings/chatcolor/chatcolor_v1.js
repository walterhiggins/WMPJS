var textcolors = require('textcolors');
var preferences = { };

function setChatColor ( args, player ) {
  var color = args[0];
  preferences[ player.name ] = color;
}
command( 'chatcolor', setChatColor, textcolors.names );

function onChat( event ) { 
  var player = event.player;
  var playerChatColor = preferences[ player.name ];
  if ( playerChatColor ) {
    event.message = textcolors.colorize( playerChatColor, event.message );
  }
}
events.asyncPlayerChat( onChat );
