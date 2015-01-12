﻿(function(window) {
C_borisAttackStance = function() {
	this.initialize();
}
C_borisAttackStance._SpriteSheet = new createjs.SpriteSheet({images: ["battleAnimationBoris.png"], frames: [[0,0,123,150,0,33.25,24.849999999999994],[123,0,124,150,0,33.25,24.849999999999994],[247,0,124,150,0,33.25,24.849999999999994],[371,0,125,149,0,33.25,23.849999999999994],[496,0,124,149,0,32.25,23.849999999999994],[620,0,125,149,0,32.25,23.849999999999994],[745,0,126,149,0,32.25,23.849999999999994],[871,0,126,149,0,32.25,23.849999999999994],[997,0,127,149,0,32.25,23.849999999999994],[1124,0,127,149,0,32.25,23.849999999999994],[1251,0,127,149,0,32.25,23.849999999999994],[1378,0,127,149,0,32.25,23.849999999999994],[1505,0,126,149,0,32.25,23.849999999999994],[1631,0,126,149,0,32.25,23.849999999999994],[1757,0,126,149,0,32.25,23.849999999999994],[1883,0,125,149,0,32.25,23.849999999999994],[0,150,125,149,0,32.25,23.849999999999994],[125,150,125,149,0,32.25,23.849999999999994],[250,150,124,149,0,32.25,23.849999999999994],[374,150,125,149,0,33.25,23.849999999999994],[499,150,124,150,0,33.25,24.849999999999994],[623,150,124,149,0,33.25,23.849999999999994],[747,150,124,150,0,33.25,24.849999999999994],[0,0,123,150,0,33.25,24.849999999999994],[871,150,140,150,0,33.25,24.849999999999994],[1011,150,140,152,0,34.25,24.849999999999994],[1151,150,139,154,0,35.25,24.849999999999994],[1290,150,138,156,0,37.25,24.849999999999994],[1428,150,135,156,0,38.25,24.849999999999994],[1563,150,134,155,0,36.25,24.849999999999994],[1697,150,132,153,0,33.25,24.849999999999994],[1829,150,131,150,0,31.25,23.849999999999994],[0,306,129,148,0,28.25,23.849999999999994],[129,306,133,146,0,26.25,22.849999999999994],[262,306,134,143,0,26.25,20.849999999999994],[396,306,133,141,0,28.25,19.849999999999994],[529,306,129,139,0,33.25,17.849999999999994],[658,306,134,146,0,38.25,18.849999999999994],[792,306,120,152,0,54.25,19.849999999999994],[912,306,117,159,0,55.25,19.849999999999994],[1029,306,116,165,0,55.25,19.849999999999994],[1145,306,116,171,0,56.25,19.849999999999994],[1261,306,114,171,0,49.25,13.849999999999994],[1375,306,138,147,0,30.25,16.849999999999994],[1513,306,135,155,0,37.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[1648,306,133,155,0,35.25,19.849999999999994],[0,0,123,150,0,33.25,24.849999999999994],[1781,306,116,153,0,34.25,23.849999999999994],[1897,306,97,155,0,36.25,22.849999999999994],[0,477,97,173,0,37.25,38.849999999999994],[97,477,101,182,0,39.25,46.849999999999994],[198,477,127,167,0,62.25,33.849999999999994],[325,477,162,149,0,96.25,18.849999999999994],[487,477,162,209,0,39.25,78.85],[649,477,162,184,0,32.25,7.849999999999994],[811,477,162,187,0,32.25,6.849999999999994],[973,477,164,191,0,34.25,6.849999999999994],[1137,477,166,195,0,36.25,6.849999999999994],[1303,477,168,198,0,38.25,6.849999999999994],[1471,477,170,201,0,40.25,6.849999999999994],[1641,477,121,204,0,42.25,6.849999999999994],[1762,477,121,203,0,42.25,6.849999999999994],[1762,477,121,203,0,42.25,6.849999999999994],[1762,477,121,203,0,42.25,6.849999999999994],[1762,477,121,203,0,42.25,6.849999999999994],[1883,477,121,204,0,42.25,6.849999999999994],[1883,477,121,204,0,42.25,6.849999999999994],[1883,477,121,204,0,42.25,6.849999999999994],[0,0,123,150,0,33.25,24.849999999999994],[1781,306,116,153,0,34.25,23.849999999999994],[1897,306,97,155,0,36.25,22.849999999999994],[0,477,97,173,0,37.25,38.849999999999994],[97,477,101,182,0,39.25,46.849999999999994],[198,477,127,167,0,62.25,33.849999999999994],[325,477,162,149,0,96.25,18.849999999999994],[487,477,162,209,0,39.25,78.85],[0,686,98,188,0,41.25,56.849999999999994],[98,686,100,187,0,43.25,55.849999999999994],[198,686,102,186,0,46.25,54.849999999999994],[300,686,105,186,0,49.25,54.849999999999994],[405,686,109,185,0,53.25,53.849999999999994],[514,686,111,183,0,56.25,52.849999999999994],[625,686,98,191,0,41.25,59.849999999999994],[723,686,95,178,0,34.25,44.849999999999994],[818,686,114,150,0,34.25,16.849999999999994],[932,686,144,144,0,37.25,11.849999999999994],[1076,686,146,146,0,46.25,23.849999999999994],[1222,686,165,164,0,47.25,41.849999999999994],[1387,686,167,175,0,48.25,51.849999999999994],[1554,686,151,155,0,53.25,31.849999999999994],[1705,686,155,156,0,54.25,31.849999999999994],[1860,686,128,156,0,55.25,31.849999999999994],[0,877,114,156,0,56.25,31.849999999999994],[114,877,115,157,0,57.25,31.849999999999994],[229,877,132,137,0,21.25,11.849999999999994],[361,877,132,138,0,22.25,12.849999999999994],[493,877,132,139,0,23.25,13.849999999999994],[625,877,132,140,0,24.25,14.849999999999994],[757,877,132,141,0,25.25,15.849999999999994],[889,877,131,141,0,26.25,15.849999999999994],[1020,877,131,142,0,27.25,16.849999999999994],[1151,877,130,143,0,28.25,17.849999999999994],[1281,877,130,144,0,29.25,18.849999999999994],[1411,877,129,145,0,30.25,19.849999999999994],[1540,877,128,146,0,31.25,20.849999999999994],[1668,877,127,146,0,32.25,20.849999999999994],[1795,877,128,146,0,31.25,20.849999999999994],[0,1034,129,145,0,30.25,19.849999999999994],[129,1034,129,145,0,29.25,19.849999999999994],[258,1034,130,144,0,28.25,18.849999999999994],[388,1034,130,144,0,27.25,18.849999999999994],[518,1034,131,143,0,27.25,17.849999999999994],[649,1034,132,143,0,26.25,17.849999999999994],[781,1034,132,142,0,25.25,16.849999999999994],[913,1034,132,142,0,24.25,16.849999999999994],[1045,1034,132,141,0,23.25,15.849999999999994],[1177,1034,132,141,0,22.25,15.849999999999994],[1309,1034,132,140,0,21.25,14.849999999999994],[1441,1034,132,140,0,21.25,14.849999999999994],[1573,1034,132,139,0,21.25,13.849999999999994],[1705,1034,132,139,0,21.25,13.849999999999994],[1837,1034,132,138,0,21.25,12.849999999999994],[0,1179,132,138,0,21.25,12.849999999999994],[229,877,132,137,0,21.25,11.849999999999994],[132,1179,144,171,0,33.25,24.849999999999994],[276,1179,143,164,0,32.25,23.849999999999994],[419,1179,141,158,0,30.25,23.849999999999994],[560,1179,148,148,0,37.25,23.849999999999994],[708,1179,140,148,0,29.25,22.849999999999994],[848,1179,139,145,0,28.25,21.849999999999994],[987,1179,138,143,0,27.25,20.849999999999994],[1125,1179,136,141,0,25.25,19.849999999999994],[1261,1179,136,141,0,25.25,19.849999999999994],[1397,1179,136,141,0,25.25,19.849999999999994],[1533,1179,136,141,0,25.25,19.849999999999994],[1669,1179,338,141,0,25.25,19.849999999999994],[0,1350,159,141,0,26.25,19.849999999999994],[159,1350,140,144,0,29.25,23.849999999999994],[299,1350,139,143,0,28.25,22.849999999999994],[438,1350,138,142,0,27.25,20.849999999999994],[576,1350,136,141,0,25.25,19.849999999999994],[712,1350,136,141,0,25.25,19.849999999999994],[712,1350,136,141,0,25.25,19.849999999999994],[712,1350,136,141,0,25.25,19.849999999999994],[712,1350,136,141,0,25.25,19.849999999999994],[712,1350,136,141,0,25.25,19.849999999999994],[576,1350,136,141,0,25.25,19.849999999999994]]});
var C_borisAttackStance_p = C_borisAttackStance.prototype = new createjs.Sprite();
C_borisAttackStance_p.Sprite_initialize = C_borisAttackStance_p.initialize;
C_borisAttackStance_p.initialize = function() {
	this.Sprite_initialize(C_borisAttackStance._SpriteSheet);
	this.paused = false;
}
window.C_borisAttackStance = C_borisAttackStance;
}(window));
