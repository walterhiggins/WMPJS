var leaderboard = require('leaderboard');

var leaderboardCmd = function( params, sender ) {
  leaderboard.jumps( sender );
};

command( 'leaderboard', leaderboardCmd );
