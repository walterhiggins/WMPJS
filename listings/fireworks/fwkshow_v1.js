var fireworks = require('fireworks');
exports.fireworkshow = function (location){
  var launch = function(){
    fireworks.firework(location);
  };
  setTimeout(launch, 2000);
};
