exports.roll = function( sides ) {
  var result = Math.random();
  result = result * sides;
  result = parseInt(result);
  return result;
};
