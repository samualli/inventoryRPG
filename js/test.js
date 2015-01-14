$(document).ready(function(){
      var itemLibrary = {
        "itemLibrary": [
            {
                "name": "Baretta M9",
                "type": "gun",
                "description": "An M9 Baretta 92FS. Semi-automatic with a capacity of 15 rounds.                        Uses 9mm bullets. (Damage: 5-12)",
                "dam_min": 5,
                "dam_max": 12,
                "value": 500,
            },
            {
                "name": "Shoulder Plate",
                "type": "chest",
                "description": "A shoddy steel plate fashioned to form around the shoulder region of the torso offering little protection. (Armor: 2)",
                "armor": 2,
                "value": 0,
            },
            {
                "name": "Laser Sight Mod",
                "type": "mod",
                "description": "A laser sight that will increase the accuracy of a pistol. (Accuracy+5%)",
                "value":300,
                "effect":"ACC+5"
            },
            {
                "name": "Bandana",
                "type": "helmet",
                "description": "A red bandana used to cover the face.  Offers more intimidation than protection. (Armor: 1)",
                "value": 20,
                "armor": 1
            },
            {
                "name": "Skull Print",
                "type": "helmet",
                "description": "A bandana with a skull design.  A weird aura seems to eminate from it. (Armor: 1)",
                "armor": 1
            },
            {
                "name": "Potion",
                "type": "consummable",
                "description": "A healing drink concocted from mysterious herbs.  It leaves your bag smelling like floor-cleaning solution. Heals 50 hp.",
                "effect": "HP+50"
            },
            {
                "name": "Steel Blade",
                "type": "weapon",
                "description": "The standard blade handed to all students on orientation day.  While still effective in combat, it is an unspoken rule at school that students must eventually own better hand-to-hand weapon for themselves for reputation sake. (Damage: 1 - 4)",
                "min_dam": 1,
                "max_dam": 4,
                "value": 0
            },
            {
                "name": "Uniform",
                "type": "chest",
                "description": "The uniform issued to each student from the academy and is expected to be worn during all classes unless during field training.  (Armor: 0)",
                "armor": 0
            },
            {
                "name": "Intro to Offensive Spells",
                "type": "quest",
                "description": "The preface reads: 'Offensive magic is more than just fireballs and ice lances.  It is mastering the principle of elemental manipulation and applying it to your particular skillset.  If you do not practice, you will fail."
            },
            {
                "name": "Intro to Defensive Spells",
                "type": "quest",
                "description": "Chapter 1: Healing Spells.  WARNING: Without skill and practice, a lack of MP and skill may cause the healing spell to backfire and cause damage instead.  A platoon with one skilled healer is much better off than having a squad who believe they can use healing spells learned from a pamphlet."
            },
            {
                "name": "Schedule",
                "type": "quest",
                "description": "11:00am - 12:00am: The Divine/Dark Arts Room:A2.<br>1:00pm - 2:00pm: Close Combat: Room:B1.<br>2:00pm - 3:00pm: Fire-Arms Room: Training Field."
            },
            {
                "name": "Student ID",
                "type": "quest",
                "description": "Your Student ID card.  It carreies your credits and has all in one access to many of the schools facilities.",
            },
            {
                "name": ".38 Revolver",
                "type": "gun",
                "description": "A basic school issued .38 revolver. Uses type R rounds. (Damage: 2-5)",
                "min_dam": 2,
                "max_dam": 5,
                "value": 0
            },
            {
                "name": ".44 Magnum Ammo",
                "type": "ammoMagnum",
                "description": "The .44 will actually fit any revolver chamber.  It's density offers more stopping power. Type R bullets.(+2 Damage)",
                "effect": "DAM+2"
            },
            {
                "name": ".38 Revolver Rounds",
                "type": "ammo38",
                "description": "These rounds were invented a century before and are used by revolvers boasting the lowest muzzle velocity in modern tech. Type R bullets.(+0 Damage)"
            },
            {
                "name": "9mm Bullets",
                "type": "ammo9mm",
                "description": "Standard 9mm bullets. Type P bullets.(+0 damage)"
            },
            {
                "name": "Ice Brand",
                "type": "weapon",
                "description": "A sword misleadingly resembling a large icicle.  However, it is a magical sword made from magical elements that is impossible to melt.  It grants ice damage, slowing the enemy's stamina regeneration rate down. (Damage: 5-14) (Ice)",
                "effect": "ice"
            }
        ]
      }
    
      //Display Item
      function displayItem(item){
          //Creates an underscore function that retrieves the name of the json items
          var getName = _.template("<%= name %>");
          //var getDescription = _.template("<%= description =%>");
          
          for(var i=0; i<itemLibrary.itemLibrary.length; i++){
                var text = getName(itemLibrary.itemLibrary[i]);
                /*if(text==item){
                    var description = getDescription(itemLibrary.itemLibrary[i]);
                    $('#itemDescription').html(description);
                }*/
          }
          
          //$('#itemList').append(text);
      }
      
      
      //Javascript Hover
      
      $('.itemObj').hover(function(){
          displayItem($(this).html());
      });
      
      
});