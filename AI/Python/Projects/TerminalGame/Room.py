class Room ():
    def __init__ (self, description, north, south, east, west, key, chest):
        self.description = description # string description of the room
        self.north = north # boolean to determine if there is a room to the north
        self.south = south # boolean to determine if there is a room to the south
        self.east = east # boolean to determine if there is a room to the east
        self.west = west # boolean to determine if there is a room to the west
        self.key = key # key object that may be in the room
        self.chest = chest # chest object that may be in the room
    
    def clear_key (self):
        self.set_key(None) # clear the key from the room
    
    def get_description (self):
        return self.description # return the description of the room
    
    def set_description (self, description):
        self.description = description # gamebuilder sets the description of the room
    
    def get_north (self): # canGoNorth method
        return self.north # check if there is a room to the north
    
    def set_north (self, north):
        self.north = north # gamebuilder determines if there is a room to the north
    
    def get_south (self): # canGoSouth method
        return self.south # check if there is a room to the south
    
    def set_south (self, south):
        self.south = south # gamebuilder determines if there is a room to the south
    
    def get_east (self): # canGoEast method
        return self.east # check if there is a room to the east
    
    def set_east (self, east):
        self.east = east # gamebuilder determines if there is a room to the east
    
    def get_west (self): # canGoWest method
        return self.west # check if there is a room to the west
    
    def set_west (self, west):
        self.west = west # gamebuilder determines if there is a room to the west
    
    def get_key (self):
        return self.key # returns the key if it is in the room, else it returns None
    
    def set_key (self, key):
        self.key = key # gamebuilder determines if there is a key in the room

    def get_chest (self):
        return self.chest # returns the chest if it is in the room, else return None
    
    def set_chest (self, chest):
        self.chest = chest # gamebuilder determines if there is a chest in the room
    
