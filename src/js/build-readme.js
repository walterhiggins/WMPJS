args = Array.prototype.slice.call(args,1);
var out = java.lang.System.out;
var err = java.lang.System.err;

var template = args[0];

function toHTMLTable( contents, caption,tableNumber ) {
  var headers = true;
  var result = ['<table>\n'];
  if (caption){
    result.push('<caption><h4> Table ' + tableNumber + ': '+ caption + '</h4></caption>');
  }
  var fCells = [];
  function toRow(cells,header){
    var result2 = [];
    var el = header ? 'th' : 'td';
    for (var k = 0;k < cells.length; k++){
      result2.push('<' + el + '>' + cells[k] + '</' + el + '>');
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
      if (fCells.length > 0){
	result.push('<tr>');
	result.push(toRow(fCells, true));
	result.push('</tr>\n');
      }
      i += 1; // skip past separator
      headers = false;
    }else {
      result.push('<tr>');
      result.push(toRow(fCells,false));
      result.push('</tr>\n');
    }
  }
  result.push('\n</table>');
  return result;
}

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

};

function getListingNumber( source, chapter){
  var result = listingKeys[source],
    recipeNum;
  if (!result){
    recipeNum = recipeKeys[ chapter ];
    result = (recipeNum+1) + '.' + listingCounts[ chapter ];
    listingCounts[ chapter ] = listingCounts[ chapter ] + 1;
    listingKeys[ source ] = result;
  }
  return result;
}
var nextAchieve = 1;
var currentRecipe = '';
var nextRecipe = 0;
var recipeKeys = {};

var tableCount = 1;

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
  '@@listing ([a-zA-Z0-9\._\-]+) (.*)': function(match, file, caption){
    var result = [];

    var listingNum = getListingNumber(file, currentRecipe);

    result.push('<caption>Listing ' + listingNum + ': ' + caption + '</caption>');
    result.push('');
    var sourceContents = readFile('listings/' + currentRecipe + '/' + file);
    for (var i = 0;i <sourceContents.length; i++){
      result.push('    ' + sourceContents[i]);
    }
    return result.join('\n');
  },
  '@@listref\{([a-zA-Z0-9_\.]+)\}': function(match, key){
    return getListingNumber(key, currentRecipe);
  },
  '@@table ([a-zA-Z0-9\._\-]+) (.*)': function(match, file, caption){
    var tableContents = readFile('tables/' + file);
    return toHTMLTable(tableContents,caption,tableCount++).join('');
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
  '@@include (.*)': function(match, file){
    var contents = readFile(file);
    return contents.join('\n');
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

