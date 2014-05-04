args = Array.prototype.slice.call(args,1);
var out = java.lang.System.out;
var err = java.lang.System.err;

var template = args[0];

var readFile = function(filename){
  
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

};

var nextAchieve = 1;
var nextRecipe = 0;
var recipeKeys = [];
var xforms = {
  '@@nextAchievement': function(match,matchIndex,line){
    return 'img/achievement-plugin-dev-' + (nextAchieve++) + '.png';
  },
  '.*@@listing .*': function(match, matchIndex, line){
    var result = [];
    var source = match.replace(/@@listing\s/,'').trim();
    var sourceContents = readFile('listings/' + source);
    for (var i = 0;i <sourceContents.length; i++){
      result.push('    ' + sourceContents[i]);
    }
    return result.join('\n');
  },
  '@@nextRecipe\{[a-zA-Z0-9]+\}': function(match, matchIndex, line){
    
    return 'Recipe ' + (nextRecipe++);
  }
};

var contents = readFile(template);

for (var i = 0;i < contents.length; i++){
  var line = contents[i];
  for (var xf in xforms){
    try{
      line = line.replace(new RegExp(xf,'g'), xforms[xf]);
    }catch (e){
      err.println('Error occurred while processing ' + line + ' Error: ' + e);
      throw e;
    }
  }
  out.println(line);
}

