var File = java.io.File,
    FileReader = java.io.FileReader,
    FileInputStream = java.io.FileInputStream,
    out = java.lang.System.out,
    err = java.lang.System.err,
    Modifier = java.lang.reflect.Modifier,
    clz,
    ZipInputStream = java.util.zip.ZipInputStream,
    zis = new ZipInputStream(new FileInputStream('../ScriptCraft/target/minecraft/craftbukkit.jar')),
    entry = null;
var oldPkg = null;
var newPkg = null;

var sorted = [];

while ( ( entry = zis.nextEntry) != null) { 
  var name = '' + entry.name;
  sorted.push(name);
}
sorted.sort();

for (var i = 0; i < sorted.length; i++){
  name = sorted[i];
  if ( name.match(/org\/bukkit\/event\/.+Event\.class$/)){

    name = name.replace(/\//g,'.').replace('.class','');
    try { 
      clz = java.lang.Class.forName(name);
    }catch ( e) {
      clz = engine.eval(name);
    }
    var isAbstract = Modifier.isAbstract(clz.getModifiers());
    if ( isAbstract ) {
      continue;
    }
    var parts = name.split('.');
    newPkg = parts[parts.length-2];
    if (newPkg != oldPkg){
      if (oldPkg != null){
	out.println("</table>");
      }
      out.println("<h3>" + newPkg.replace(/^(.)/,function(a){return a.toUpperCase()}) + ' Events</h3>');
      out.println("<table>");
      out.println("<tr><th>Function</th><th>Event type</th></tr>");
      oldPkg = newPkg;
    }
    var shortName = name.replace('org.bukkit.event.','');
    var fname = parts.reverse().shift().replace(/^(.)/,function(a){ return a.toLowerCase();}).replace(/Event$/,'');
    out.println("<tr><td>events." + fname + "()</td><td>" + name + "</td>");
  }


}
out.println("</table>");



