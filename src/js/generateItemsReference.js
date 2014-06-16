var File = java.io.File,
    out = java.lang.System.out,
    err = java.lang.System.err,
    bkMaterial = org.bukkit.Material;

var materials = bkMaterial.values();
out.println("<table>");
out.println("<tr><th>Function</th><th>Material</th></tr>");
for (var i = 0;i < materials.length; i++){

  var name = (''+materials[i].name()).toLowerCase();
  name = name.replace(/(_.)/g,function(a){ return a.replace(/_/,'').toUpperCase(); });
  out.println("<tr><td>items." + name + "()</td><td>Material." + (''+materials[i].name()) + "</td></tr>");
}
out.println("</table>");
