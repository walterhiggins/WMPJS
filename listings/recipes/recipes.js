var items = require('items');
var bkEnchantment = org.bukkit.enchantments.Enchantment;
var bkShapedRecipe = org.bukkit.inventory.ShapedRecipe;
var bkTeleportCause = org.bukkit.event.player.PlayerTeleportEvent.TeleportCause;

var enderBow = items.bow(1);
enderBow.addUnsafeEnchantment( bkEnchantment.LUCK, 3); 

var enderBowRecipe = new bkShapedRecipe(enderBow);

// E = ender pearl
// S = stick
// T = thread (string)

enderBowRecipe.shape([
  "EST", 
  "SET", 
  "EST"
]
);

enderBowRecipe.setIngredient('E', items.enderPearl());
enderBowRecipe.setIngredient('S', items.stick());
enderBowRecipe.setIngredient('T', items.string());

var added = server.addRecipe(enderBowRecipe);
if (!added){
  console.log('Could not add recipe!');
}

function isEnderBow( item ){
  if (item && 
      (item.type == items.bow()) &&
      item.getEnchantmentLevel(bkEnchantment.LUCK) == 3){
    return true;
  }
  return false;
}

function onArrowHit( event ) {
  var arrow = event.entity;
  var shooter = arrow.shooter;
  var itemInHand = shooter.itemInHand;
  if ( isEnderBow( itemInHand ) ) {
    arrow.remove();
    shooter.teleport( arrow.location, bkTeleportCause.PLUGIN );
  }
}
events.projectileHit( onArrowHit );

