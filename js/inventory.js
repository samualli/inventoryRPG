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
    $.getJSON('json/itemLibrary.json', function(data) {
        itemLibrary = data.itemLibrary;
    });
    
      /*---------------------------------------------------------------
      get Function
      Returns the value assoicated with the given key
      PRE: objJSON must be a JSON object
      ---------------------------------------------------------------*/
      function get(key, objJSON){
          var string = "<%=" + key + "%>";
          var getKey = _.template(string);
          
          //TODO ERROR CATCHING if Obj not json object
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
      initialize Function
      Returns the value assoicated with the given key
      PRE: objJSON must be a JSON object
      ---------------------------------------------------------------*/
      function initialize(){
          
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