var playerSort = require('playerSort');

var jumps = function( sender ) {
  var players = bukkit.players();
  players.sort( playerSort.byJumps );
  players.reverse();

  for (var i = 0; i < players.length; i++ ) {

    var player = players[i];
    var jumpStats = player.getStatistic( bukkit.stat.JUMP );
    sender.sendMessage( player.name + ' ' + jumpStats);

  }

};

exports.jumps = jumps;
