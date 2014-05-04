args = Array.prototype.slice.call(args,1);
var out = java.lang.System.out;
var err = java.lang.System.err;

var template = args[0];

var readFile = function(filename){
  var BufferedReader = java.io.BufferedReader;
  var FileReader = java.io.FileReader;
  
  var contents = [], line = undefined;
  var br = new BufferedReader( new FileReader(filename) );
  
  while ( (line = br.readLine()) != null){
    contents.push(line);
  }
  br.close();
  return contents;
};

var nextAchieve = 1;
var xforms = {
  '@@nextAchievement': function(match,matchIndex,line){
    return 'img/achievement-plugin-dev-' + (nextAchieve++) + '.png';
  },
  '.*@@listing .*': function(match, matchIndex, line){
    var result = [];
    var source = match.replace(/@@listing\s/,'');
    var sourceContents = readFile('listings/' + source);
    for (var i = 0;i <sourceContents.length; i++){
      result.push('    ' + sourceContents[i]);
    }
    return result.join('\n');
  }
};

var contents = readFile(template);

for (var i = 0;i < contents.length; i++){
  var line = contents[i];
  for (var xf in xforms){
    line = line.replace(new RegExp(xf,'g'), xforms[xf]);
  }
  out.println(line);
}

