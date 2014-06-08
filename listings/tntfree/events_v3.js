var zones = require('protection/zones');
var plots = require('protection/plots');

function playerOwnsPlot( player, location){
  var boundingPlots = plots.getBoundingPlots( location );
  for (var i = 0;i < boundingPlots.length; i++){
    var plot = boundingPlots[i];
    if (plot.claimedBy == player.name){
      console.log('plot ' + plot.number + ' is owned by ' + player.name);
      return true;
    }
  }
  return false;
}
function playerIsTrusted( player, location) {
  var playerName = ''+ player.name;

  var boundingPlots = plots.getBoundingPlots( location );
  for (var i = 0;i < boundingPlots.length; i++){
    var plot = boundingPlots[i];
    var sharedWith = plot.sharedWith;
    if (!sharedWith ) {
      continue;
    }
    for (var j = 0; j < sharedWith.length; j++){
      if (sharedWith[j] == playerName){
	return true;
      }
    }
  }
  return false;
}
function onPlace( event ) {
  if (event.player.op){
    return;
  }
  if (playerOwnsPlot( event.player, event.blockPlaced.location ) ){
    return;
  } 
  if (playerIsTrusted( event.player, event.blockPlaced.location) ) {
    return;
  }
  var boundingPlots = plots.getBoundingPlots(event.blockPlaced.location);
  var boundingZones = zones.getBoundingZones(event.blockPlaced.location);
  if (boundingPlots.length == 0 && boundingZones.length == 0){
    return;
  }
  event.cancelled = true;
}
function onBreak( event ){
  if (event.player.op){
    console.log('player is op');
    return;
  }
  if (playerOwnsPlot( event.player, event.block.location ) ){
    console.log('player owns plot');
    return;
  }
  if (playerIsTrusted( event.player, event.block.location ) ){
    console.log('player is trusted');
    return;
  } else {
    console.log('player is not trusted');
  }
  var boundingPlots = plots.getBoundingPlots(event.block.location);
  var boundingZones = zones.getBoundingZones(event.block.location);
  if (boundingPlots.length == 0 && boundingZones.length == 0){
    return;
  }
  event.cancelled = true;
}
events.blockPlace( onPlace );
events.blockBreak( onBreak );
