var playerSort = require('playerSort');

var jumps = function( sender ) {
  var players = bukkit.players();
  players.sort( playerSort.byJumps );
  players.reverse();

  var i = 0;
  while (i < players.length ){

    var player = players[i];
    var jumpStats = player.getStatistic( bukkit.stat.JUMP );
    sender.sendMessage( player.name + ' ' + jumpStats);
    
    i++;
  }

};

exports.jumps = jumps;
