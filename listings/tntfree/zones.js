
var store = persist( 'zones', { zones: [] } );

function addZone( a, b ){
  var result = { 
    startX: 0,
    startZ: 0,
    extentX: 0,
    extentZ: 0 
  };
  if (a.x < b.x){
    result.startX = a.x;
    result.extentX = (b.x - a.x);
  } else { 
    result.startX = b.x;
    result.extentX = (a.x - b.x);
  }
  if (a.z < b.z){
    result.startZ = a.z;
    result.extentZ = (b.z - a.z);
  } else {
    result.startZ = b.z;
    result.extentZ = (a.z - b.z);
  }
  store.zones.push(result);

  return result;
}
function getBoundingZones( location ){
  var i = 0;
  var result = [];
  var zone = null;
  for (i = 0; i < store.zones.length; i++ ){
    zone = store.zones[i];
    if (isBounding( location, zone ) ){
      result.push(zone);
    }
  }
  return result;
}
function isBounding( location , zone){
  if (!zone){
    return false;
  }
  if ( (location.x >= zone.startX && location.x <= (zone.startX + zone.extentX) ) &&
       (location.z >= zone.startZ && location.z <= (zone.startZ + zone.extentZ) ) ) { 
    return true;
  }
  return false;
}

exports.add = addZone;
exports.getBoundingZones = getBoundingZones;

