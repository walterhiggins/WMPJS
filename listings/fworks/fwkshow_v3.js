var fireworks = require('fireworks');
exports.fireworkshow = function ( location, count ) {
  
  function launch( ) {
    fireworks.firework( location );
    count = count - 1;
    if ( count == 0 ) {
      clearInterval(scheduled);
    }
  }
  var scheduled = setInterval( launch, 2000 );
  return scheduled;
};
