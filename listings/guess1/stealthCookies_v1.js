var items = require('items');
events.blockBreak(function(event){
  var breaker = event.player;
  var broken = event.block;
  
  if ( breaker.sneaking || breaker.flying ) {
    broken.world.dropItem( broken.location, items.cookie(2));
  }
});
		 
