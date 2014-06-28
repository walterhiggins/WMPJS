args = Array.prototype.slice.call(args,1);

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
function toFilename(str){
  var result = str.toLowerCase().replace(/[^a-z0-9]+/g,'-');
  result = (result.replace(/^-+/,'').replace(/-+$/,'')) + '.txt';
  var prefix = partNum>9?'':'0';
  return outputDir + "/" + prefix + (partNum++) + '-' + result;
}
function newFile(out, line){
  if (out != null){
    if (enclose) {
      out.println("</body></html>");
    }
    out.close();
  }
  var filename = toFilename(line);
  out = new PrintWriter(filename, 'UTF-8');
  if (enclose){
    out.println("<html><body>");
  }
  return out;
}
var out = null;
var contents = readFile(args[0]);
var outputDir = args[1];
var enclose = args[2];
var partNum = 1;
var sysout = java.lang.System.out;

var PrintWriter = java.io.PrintWriter;
var promote = false;

for (var i = 0;i < contents.length; i++){
  var line = ''+contents[i];
  if (line.match(/^# /)){
    promote = false;
    out = newFile(out, line);
  }
  if (line.match(/^## Chapter/)){
    promote = true;
    out = newFile(out, line);
  }
  if (line.match(/^## Appendix/)){
    promote = true;
    out = newFile(out, line);
  }
  if (out != null){
    if (promote){
      line = line.replace(/^#/,'');
    }
    out.println(line);
  }
}
if (out != null){
  out.close();
}
