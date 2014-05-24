var Drone = require('../drone').Drone;

function pyramid ( side ) {
  if ( !side ) {
    side = 30;
  }
  var i = side;
  var material = blocks.sandstone;

  this.chkpt('pyramid');

  while ( i > 0 ) {
    this.box( material, i, 1, i)
      .up()
      .right()
      .fwd();
    i = i - 2; 
  }

  this.move('pyramid');      
}

Drone.extend( pyramid );
