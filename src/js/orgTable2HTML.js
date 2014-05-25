var args = Array.prototype.slice.call(args,1);
var out = java.lang.System.out;
var err = java.lang.System.err;

var template = args[0];

function readFile ( filename ) {
  
  var BufferedReader = java.io.BufferedReader;
  var FileReader = java.io.FileReader;
  var contents = [], line = undefined;
  var br = null;

  try { 
    br = new BufferedReader( new FileReader(filename) );
  
    while ( (line = br.readLine()) != null){
      contents.push(line);
    }
    br.close();
  } catch ( e ){
    err.println('Error while trying to read file [' + filename + '] error: ' + e);
    throw e;
  } 
  return contents;

}

var contents = readFile(args[0]);

function toHTML(contents){
  var headers = true;
  var result = ['<table>\n'];
  var fCells = [];
  function toRow(cells){
    var result2 = [];
    for (var k = 0;k < cells.length; k++){
      result2.push('<td>' + cells[k] + '</td>');
    }
    return result2.join('');
  }
  for (var i = 0;i < contents.length; i++){
    fCells = [];
    var line = contents[i];
    var cells = (''+line).split(/\|/);
    for (var j = 0; j < cells.length; j++){
      var trimmed = cells[j].trim();
      if (trimmed)
	fCells.push(trimmed);
    }
    if (headers){
      result.push('<th>');
      result.push(toRow(fCells));
      result.push('</th>\n');
      i += 1; // skip past separator
      headers = false;
    }else {
      result.push('<tr>');
      result.push(toRow(fCells));
      result.push('</tr>\n');
    }
  }
  result.push('\n</table>');
  return result;
}

out.println(toHTML(contents).join(''));
