var colors = [
  'black',
  'blue',
  'darkgreen', 
  'darkaqua', 
  'darkred',
  'purple', 
  'gold', 
  'gray', 
  'darkgray', 
  'indigo',
  'brightgreen', 
  'aqua', 
  'red', 
  'pink', 
  'yellow' , 
  'white'
];

function setupColorCodes( colors ) {
  var SECTION = '\xa7'; 
  var result = {};
  var color = null;
  var i;
  for (i = 0; i < colors.length; i++ ) {
    color = colors[i];
    result[color] = SECTION + i.toString( 16 );
  }
  return result;
}
var codes = setUpColorsCodes(colors);
exports.colors = colors;
exports.codes = codes;
