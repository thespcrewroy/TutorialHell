class Player():
    def __init__(self, x_pos, y_pos, key):
        self.x_pos = x_pos
        self.y_pos = y_pos
        self.key = key
    
    def get_x_pos(self):
        return self.x_pos # return the x position of the player
    
    def set_x_pos(self, x_pos):
        self.x_pos = x_pos # set the x position of the player

    def get_y_pos(self):
        return self.y_pos # return the y position of the player
    
    def set_y_pos(self, y_pos):
        self.y_pos = y_pos # set the y position of the player

    def get_key(self):
        return self.key # return the key the player is holding to be used on a chest
    
    def set_key(self, key):
        self.key = key # put the key in the player's inventory


        