/*Samuel Li Jan 31 2014
Battletest RPG */

var heroes = [];

$(document).ready(function(){
    initialize();
    console.log(heroes);
    
});

/*======================
Function Initialize
Loads up the JSON files and puts it in the game
========================*/
function initialize(){

    $.getJSON('json/units.json', function(data) {
        window.heroes = data;
        console.log(data.heroes.name);
    });
    
    
    $.each(heroes, function(i, item){
    });
    
}