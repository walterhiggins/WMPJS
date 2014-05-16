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
var currentRecipe = '';
var nextRecipe = 0;
var recipeKeys = {};

var currentChap = '';
var nextChap = 1;
var chapKeys = {};

var nextListing = 0;
var listingKeys = {};
var listingCounts = {};
var xforms = {
  '@@nextAchievement': function(match,matchIndex,line){
    return 'img/achievement-plugin-dev-' + (nextAchieve++) + '.png';
  },
  '.*@@listing .*': function(match, matchIndex, line){
    var result = [];
    var source = match.replace(/@@listing\s/,'').trim();
    var recipeNum = recipeKeys[currentRecipe];
    var listingNum = listingKeys[source];
    if (!listingNum){
      listingNum = (recipeNum+1) + '.' + listingCounts[currentRecipe];
      listingCounts[currentRecipe] = listingCounts[currentRecipe]+1;
    }
    listingKeys[source] = listingNum;
    result.push('<caption>Listing ' + listingNum + '</caption>');
    result.push('');
    var sourceContents = readFile('listings/' + currentRecipe + '/' + source);
    for (var i = 0;i <sourceContents.length; i++){
      result.push('    ' + sourceContents[i]);
    }
    return result.join('\n');
  },
  '@@nextRecipe\{([a-zA-Z0-9]+)\}': function(match, key, matchIndex, line){
    recipeKeys[key] = nextRecipe++;
    listingCounts[key] = 1;
    currentRecipe = key;
    return 'Recipe ' + recipeKeys[key];
  },
  '@@nextChapter\{([a-zA-Z0-9]+)\}': function(match, key, matchIndex, line){
    chapKeys[key] = nextChap++;
    listingCounts[key] = 1;
    currentChap = key;
    return 'Chapter ' + chapKeys[key];
  },
  '@@recipe\{([a-zA-Z0-9]+)\}': function(match, key){
    return 'recipe ' + recipeKeys[key];
  },
  '@@listref\{([a-zA-Z0-9_\.]+)\}': function(match, key){
    return 'listing ' + listingKeys[key];
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

