var dice = require('dice');
var greetings = [ 'Hello ', 'Hola ', 'Bonjour ', 'Konnichiwa ' ];
var len = greetings.length;

exports.random = function( ) {
  var index = dice.roll(len);
  var greeting = greetings[ index ];
  return greeting;
};
