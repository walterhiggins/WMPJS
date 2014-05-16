var roll = function( ) {
  var result = Math.random();
  var sides = 6;
  result = result * sides;
  result = Math.floor(result);
  return result;
};
exports.roll = roll;
