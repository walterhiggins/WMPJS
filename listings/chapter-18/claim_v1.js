var plots = require('protection/plots');
var fireworks = require('fireworks');
function claim( params, player ){
  var existingClaim = plots.getClaim( player );
  var boundingPlots = plots.getBoundingPlots( player.location );
  if ( existingClaim ) {
    player.sendMessage('You already have plot number ' + existingClaim.number);
    return;
  }
  if (boundingPlots.length == 0){
    player.sendMessage('You are not in a plot!');
    return;
  }
  for (var i = 0;i < boundingPlots.length;i++){
    var plot = boundingPlots[i];
    if (!plot.claimedBy){
      plot.claimedBy = '' + player.name; // convert from Java to JavaScript string
      player.sendMessage('Congratulations! You now own plot ' + plot.number);
      fireworks.firework( player.location );
      return;
    }
  }
  player.sendMessage('No available plots!');
}
command(claim);
