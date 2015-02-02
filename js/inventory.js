/*Samuel Li
Inventory System

Reads JSON file
Needs:
1) Spritesheet of Item portraits
2) JSON file of items
Displays Item Portrait and Description on screen
*/



/*GLOBAL VARIABLES*/
//Spritesheet Grid Width
//To help target itemis in spritesheet
var SS_URL = "../../assets/_img/itemInventory.png";
var SS_Width = 5;
var image_dimension = 98;
var imagePortraitColor = "#4F6479";
//=================

$(document).ready(function(){
    //Load JSON file for item library
    var itemLibrary = [];
    var heroLibrary = [];
    $.getJSON('json/itemLibrary.json', function(data) {
        itemLibrary = data.itemLibrary;
    });
    $.getJSON('json/units.json', function(data){
        heroLibrary = data.heroes;
        updateInventory(heroLibrary[0]); //Temp only first hero
    });


    
    
      /*---------------------------------------------------------------
      get Function
      Returns the value assoicated with the given key
      PRE: objJSON must be a JSON object
      ---------------------------------------------------------------*/
      function get(key, objJSON){
          var string = "<%=" + key + "%>";
          var getKey = _.template(string);
          
          return(getKey(objJSON));
      }
      /*---------------------------------------------------------------
      displayItem function
      Outputs the description and associated image with the 'item'
      Also returns the json object if it is found otherwise it will return null
      ---------------------------------------------------------------*/
      function displayItem(itemName){
          
          //Finds the item
          for(var i=0; i<itemLibrary.length; i++){
              
              //Gets the name of the object
              //This is what we have to change for JSON
              var currentItem = itemLibrary[i];
              var nameCheck = get("name", currentItem);
              
              if (nameCheck == itemName){
                  //Sets the itemDescription box to be filled with the description
                  //associated with the item
                  $('#itemDescription').html(get("description",currentItem));
                  //Uses the item id to find the picture
                  var item_id = get("id", currentItem);
                  var x_coord = -1 * item_id % SS_Width * image_dimension; 
                  //returns the x pos of item in ss
                  var y_coord = -1 * Math.floor(item_id/SS_Width) * image_dimension;
                  $('#itemPortrait')
                  .css('background', 'url(' + SS_URL + ')' + x_coord + ' ' + y_coord);
                  $('#itemPortrait').css('background-color', imagePortraitColor);
                  
                  i = itemLibrary.length; //End the for loop
                  return(currentItem);
              }
              
          }
          console.log("'" + itemName + "' not found");
          //will return null if item is not found
          return(null);
      }
    
     /*---------------------------------------------------------------
      updateInventory Function
      Updates the stats on the inventory screen
      PRE: Hero is a hero object with hp, dex, end, int, lvl
      ---------------------------------------------------------------*/
      function updateInventory(hero){
        //Can be modified to view multipled party members
        //Char stats string construction
                  var mp = hero.INT * 5;
                  var hp = hero.END * 5 + hero.LVL * 10;
                  var tempString = hero.STR + "<br>" + hero.DEX + "<br>" + hero.INT + "<br>" + hero.END;
                  $('#charStats').html(tempString);
            //Takes character stats and equipment and calculates
      }
      
/*=================================================================
     Button Functions
============================================================*/
      //Javascript Hover
      //The title of the item in the button is used to manipulate the behavior
      $('.itemObj').hover(function(){
          //Gets description and item picture on hover
          displayItem($(this).html());
      });
      
      
});