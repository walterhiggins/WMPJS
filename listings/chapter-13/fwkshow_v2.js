var fireworks = require('fireworks');
exports.fireworkshow = function ( location, count ) {
  
  function launch( ){
    fireworks.firework( location );
    count = count - 1;
    if ( count ) {
      setTimeout( launch, 2000 );
    }
  }

  setTimeout( launch, 2000 );
};
