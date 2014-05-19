var byName = function( a, b ) { 
  if (a.name == b.name) {
    return 0;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
};
exports.byName = byName;

var byExp = function( a, b ) { 
  return a.totalExperience - b.totalExperience;
};
exports.byExperience = byExp;
exports.byExp = byExp;

var byJumps = function( a, b ) {
  var aJumps = a.getStatistic( bukkit.stat.JUMP );
  var bJumps = b.getStatistic( bukkit.stat.JUMP );
  return aJumps - bJumps;
};
exports.byJumps = byJumps;
