var playerSort = require('playerSort');

function jumps( sender ) {
  var players = bukkit.players();
  players.sort( playerSort.byJumps );
  players.reverse();

  for (var i = 0; i < players.length; i++ ) {

    var player = players[i];
    var playerJumps = player.getStatistic( bukkit.stat.JUMP );
    sender.sendMessage( player.name + '_________' + playerJumps);

  }

};

exports.jumps = jumps;
