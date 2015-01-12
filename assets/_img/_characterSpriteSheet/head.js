(function(window) {
CW_bhead = function() {
	this.initialize();
}
CW_bhead._SpriteSheet = new createjs.SpriteSheet({images: ["head.png"], frames: [[0,0,93,87,0,53.1,43.5],[93,0,77,86,0,52.1,45.5],[0,87,95,108,0,53.1,43.5],[95,87,81,109,0,54.1,66.5]]});
var CW_bhead_p = CW_bhead.prototype = new createjs.Sprite();
CW_bhead_p.Sprite_initialize = CW_bhead_p.initialize;
CW_bhead_p.initialize = function() {
	this.Sprite_initialize(CW_bhead._SpriteSheet);
	this.paused = false;
}
window.CW_bhead = CW_bhead;
}(window));

