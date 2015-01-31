inventoryRPG
============

A prototype of an inventory system for an RPG game.
Will be able to read from a database of items and the user
will be able to manipulate, equip, unequip weapons and armor
and use consummable items as well as dynamically view updates
to status effects and item descriptions.

Ported over from a Flash game I developed into HTML5.

Step one was to create the layout in Illustrator, opting to adhere strongly to a grid so that when I recreate the Inventory Screen with SCSS, one change to a variable will resize everything in a way that is balanced and porportional.

Some struggles I went through was the realization that I had to split the layout in HTML to two larger sections, one that housed the item list on the right hand side and the output for the character stats and item descriptions on the left.  Without the wrappers it would've been impossible for the organization of each element.

Step two was to actually start protyping how the items in the item list would interact with the output on the inventory screen.  This involves creating a database for the items to store the information about each item.

Having learned from my previous attempts at making a full fledged RPG on Flash, I learned that the way I organize information and how I am able to retrieve and change the data is literally the cornerstone to the RPG.  Any good program needs a well thought-out database schema.

After some reading into the Introduction to Database designs and reading a textbook on MySQL Tutorial and diving into their crash course in database design.  I began applying Normalization to ensure a quality database.  I created tables and did my best to reduce redundencies and ended up with five tables.

The main table will be of the: (* = primary key, # = foreign key)
Item_Library: [ItemID*, name, type, quantity, description]
Weapon_Table: [ItemID*, min_damage, max_damage]
Ranged_Weapon: [ItemID*, ammo_in, clip_size]
Effect_Table: [ItemID*, effect]
Armor: [ItemID*, armor]

The "quantity" will determine if the user has the item in their inventory and the "type" will allow tabbed organization to view specific categories of items. (weapons, consummable items, armor)