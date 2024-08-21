from Room import Room
from Key import Key
from Chest import Chest

class Map():
    def __init__ (self, simple_map):
        self.simple_map = simple_map # boolean to determine if the map is simple

        if (self.simple_map): # if the map is simple
            map = Room[1][1] # create a 2D array of Room objects (1 room)
            golden_key = Key() # create a key object
            chest = Chest(None, None, None) # create a chest object

            chest.set_locked(True) # lock the chest
            chest.set_golden_key(golden_key) # set the key that locked the chest as the golden key
            chest.set_contents("gold and silver") # set the contents of the chest
            
            map[0][0] = Room.set_description("This is a one room map, everything you need is here.") # set the description of the room
            map.set_north(False) # you can't go north
            map.set_south(False) # you can't go south
            map.set_east(False) # you can't go east
            map.set_west(False) # you can't go west
            map.set_key(golden_key) # add a key to this room
            map.set_chest(chest) # add a chest to this room
        else: # if the map is not simple
            map = Room[4][4] # create a 2D array of Room objects (16 rooms)
            golden_key = Key() # create a key object
            chest = Chest(None, None, None) # create a chest object

            chest.set_locked(True) # lock the chest
            chest.set_golden_key(golden_key) # set the key that locked the chest as the golden key
            chest.set_contents("diamonds") # set the contents of the chest

# ------------------------------------------------------------------------------------

            # for row in map:
            #     for room in row:
            #          map[row][room] = self.create_room