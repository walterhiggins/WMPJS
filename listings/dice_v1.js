exports.roll = function(){
  var result = Math.random();
  result = result * 6;
  result = parseInt(result);
  return result;
}
