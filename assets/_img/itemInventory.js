(function(window) {
ItemInventory = function() {
	this.initialize();
}
ItemInventory._SpriteSheet = new createjs.SpriteSheet({images: ["itemInventory.png"], frames: [[0,0,98,98,0,1,1],[98,0,98,98,0,1,1],[196,0,98,98,0,1,1],[294,0,98,98,0,1,1],[392,0,98,98,0,1,1],[0,98,98,98,0,1,1],[98,98,98,98,0,1,1],[196,98,98,98,0,1,1],[294,98,98,98,0,1,1],[392,98,98,98,0,1,1],[0,196,98,98,0,1,1],[98,196,98,98,0,1,1],[196,196,98,98,0,1,1],[294,196,98,98,0,1,1],[392,196,98,98,0,1,1],[0,294,98,98,0,1,1],[98,294,98,98,0,1,1]]});
var ItemInventory_p = ItemInventory.prototype = new createjs.Sprite();
ItemInventory_p.Sprite_initialize = ItemInventory_p.initialize;
ItemInventory_p.initialize = function() {
	this.Sprite_initialize(ItemInventory._SpriteSheet);
	this.paused = false;
}
window.ItemInventory = ItemInventory;
}(window));

