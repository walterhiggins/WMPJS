var items = require('items');
events.blockBreak(function(event){
  var breaker = event.player;
  var broken = event.block;
  var isSand = items.sand(broken.material);
  if ( isSand && ( breaker.sneaking || breaker.flying ) ) {
    broken.world.dropItem( broken.location, items.cookie(2) );
  }
});
