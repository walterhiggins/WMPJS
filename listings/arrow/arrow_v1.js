var items = require('items');
var bkEnchantment = org.bukkit.enchantments.Enchantment;
function isEnderBow( item ){
  if (item && 
      (item.getType() == items.bow()) &&
      item.getEnchantmentLevel(bkEnchantment.LUCK) == 3){
    return true;
  }
  return false;
}

function onArrowHit( event ) {
  var arrow = event.getEntity();
  var shooter = arrow.getShooter();
  var itemInHand = shooter.getItemInHand();
  var arrowLocation = arrow.getLocation();
  if ( isEnderBow( itemInHand ) ) {
    arrow.remove();
    shooter.teleport( arrowLocation );
  }
}
events.projectileHit( onArrowHit );
