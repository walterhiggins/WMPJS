var fireworks = require('fireworks');
exports.fireworkshow = function (location){
  function launch(){
    fireworks.firework(location);
  };
  setTimeout(launch, 2000);
};
