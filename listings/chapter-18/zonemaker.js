var Drone = require('../drone/drone').Drone;
var zones = require('protection/zones');
function zonemaker( material, width, length ) {
  var sx = this.getLocation();
  this.chkpt('zonemaker');
  if (material != null){
    this.box0( material ,width, 1, length);
  }
  var ex = this.fwd(length - 1).right(width - 1).getLocation();
  zones.add(sx,ex);
  this.move('zonemaker');
}
Drone.extend(zonemaker);
