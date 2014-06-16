/*
  This script is run at build time to generate api.md - a single Markdown document containing documentation for ScriptCraft's API
*/
var err = java.lang.System.err;

args = Array.prototype.slice.call(args,1);

if (typeof importPackage == 'undefined'){
    // load compatibility script
    load('nashorn:mozilla_compat.js');
}
var dir = args[0];
var foreach = function(array, func){
    for (var i =0; i < array.length; i++){
        func(array[i],i,array);
    }
};

importPackage(java.io);
/*
  find - a (very) basic implementation of the unix command line tool.
*/
var find = function(dir,store,re) 
{
    var files = dir.listFiles();
    foreach (files, function(filename){
        filename = "" + filename;
        var file = new File(filename);
        if (file.isDirectory()) {
            find(file,store,re);
        } else {
            if (typeof re == "undefined") 
                store.push(filename);
            else if (filename.match(re)) 
                store.push(filename);
        }
    });
};
var store = [
  '../ScriptCraft/src/main/js/plugins/drone/drone.js',
  '../ScriptCraft/src/main/js/plugins/drone/sphere.js'
  ];
var contents = [];
foreach(store, function(filename){
    var br = new BufferedReader(new FileReader(filename));
    var line ;
    while ( (line = br.readLine()) != null){
      contents.push(line);
    }
    br.close();
});

var len = contents.length;
var writeComment = false;
var startComment = /^\/\*{10}/;
var endComment = /^\*{3}\//;

for (var i = 0;i < contents.length; i++){
    var line = contents[i];
    if (line.match(startComment)){
        writeComment = true;
        i++;
    }
    if (line.match(endComment)){
        writeComment = false;
    }
    if (writeComment){
	line = (''+contents[i]).replace(/img\//,'img/drone-api-ref/');
        java.lang.System.out.println(line);
    }
}

