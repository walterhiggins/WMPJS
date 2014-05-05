var roll = function( sides ) {
  if ( typeof sides === 'undefined' ) { 
    sides = 6;
  }
  var result = Math.random();
  result = result * sides;
  result = parseInt(result);
  return result;
};
exports.roll = roll;
