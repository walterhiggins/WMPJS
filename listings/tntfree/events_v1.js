var zones = require('protection/zones');

function zonePlace( event ) {
  if (event.player.op){
    return;
  }
  var boundingZones = zones.getBoundingZones(event.blockPlaced.location);
  if (boundingZones.length == 0){
    return;
  }
  event.cancelled = true;
}
function zoneBreak( event ){
  if (event.player.op){
    return;
  }
  var boundingZones = zones.getBoundingZones(event.block.location);
  if (boundingZones.length == 0){
    return;
  }
  event.cancelled = true;
}
events.blockPlace( zonePlace );
events.blockBreak( zoneBreak );
