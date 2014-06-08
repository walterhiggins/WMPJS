
var store = persist( 'zones', [] );
var region = require('./region');

function addZone( a, b ){
  var result = region.create(a,b);
  store.push(result);
  return result;
}
function getBoundingZones( location ){
  var i = 0;
  var result = [];
  var zone = null;
  for (i = 0; i < store.length; i++ ){
    zone = store[i];
    if ( region.contains(zone, location) ){
      result.push(zone);
    }
  }
  return result;
}

exports.add = addZone;
exports.getBoundingZones = getBoundingZones;

