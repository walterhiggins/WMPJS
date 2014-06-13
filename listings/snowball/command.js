var region = require('protection/region');  
var fireworks = require('fireworks');
var bkTeleportCause = org.bukkit.event.player.PlayerTeleportEvent.TeleportCause;
var bkLocation = org.bukkit.Location;
var game = require('./game');
var arenas = persist('snowball-arenas', []);

function snowball( params, player ){
  var playerLoc = player.location;
  var i = 0;
  var arena = null;
  var gameOn = false;
  var participant = null;

  for (; i < arenas.length; i++){
    arena = arenas[i];
    if (region.contains( arena.redZone, playerLoc) ||
	region.contains( arena.blueZone, playerLoc) ||
	region.contains( arena.yellowZone, playerLoc) ){
      // game on!
      gameOn = true;
      break;
    } 
  }
  if (!gameOn){
    player.sendMessage('You must issue this command while in a colored zone');
    return;
  }
  var allPlayers = bukkit.players();
  var teams = {red: [], blue:[], yellow:[]};
  var pregameLocs = [];
  var gameLocs = [];
  var isParticipant = false;
  var spawn = null;

  for (i = 0;i < allPlayers.length; i++) {

    participant = allPlayers[i];
    var loc = participant.location;
    isParticipant = false;
    if (region.contains( arena.redZone, loc) ){
      teams.red.push(''+participant.name);
      spawn = arena.redSpawn;
      isParticipant = true;
    } 
    if (region.contains( arena.blueZone, loc) ) {
      teams.blue.push(''+participant.name);
      spawn = arena.blueSpawn;
      isParticipant = true;
    }
    if (region.contains( arena.yellowZone, loc) ){
      teams.yellow.push(''+participant.name);
      spawn = arena.yellowSpawn;
      isParticipant = true;
    } 
    if (isParticipant){
      pregameLocs.push({
	player: participant, 
	location: loc
      });
      gameLocs.push({
	player: participant,
	location: new bkLocation( loc.world, spawn.x, spawn.y, spawn.z)
      });
    }
  }
  if ( (teams.red.length == 0 && teams.blue.length == 0)
    || (teams.red.length == 0 && teams.yellow.length == 0)
    || (teams.blue.length == 0 && teams.yellow.length == 0))
  {
    player.sendMessage('Need more than one team to play. Someone choose a different color.');
    return;
  }
  function returnPlayers(){
    for (var i = 0;i < pregameLocs.length; i++) { 
      pregameLocs[i].player.teleport(pregameLocs[i].location, bkTeleportCause.PLUGIN);
      fireworks.firework( pregameLocs[i].location );
    }
  }

  for (var i = 0;i < pregameLocs.length; i++) { 
    gameLocs[i].player.teleport(gameLocs[i].location, bkTeleportCause.PLUGIN);
  }
  setTimeout(returnPlayers, 65000);
  
  game.SnowballFight(60, teams);
}

command( snowball );
