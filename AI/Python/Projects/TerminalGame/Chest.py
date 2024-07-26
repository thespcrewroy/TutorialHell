class Chest ():
    def __init__ (self, locked, golden_key, contents): # constructor
        self.locked = locked # boolean to determine if the chest is locked
        self.golden_key = golden_key # the key that locks the chest
        self.contents = contents # string that hold the contents of the chest
    
    def lock (self, key):
        self.set_locked(True) # lock the chest
        self.set_golden_key(key) # set the key that locked the chest as the golden key

    def unlock (self, key):
        if key == self.golden_key: # if the entered key is the golden key
            self.set_locked(False) # unlock the chest
    
    def get_locked (self):
        return self.locked # return the locked status of the chest
    
    def set_locked (self, locked):
        self.locked = locked # gamebuilder sets the locked status of the chest

    def get_golden_key (self):
        return self.golden_key # return the golden key
    
    def set_golden_key (self, golden_key):
        self.golden_key = golden_key # gamebuilder sets the golden key to unlock chest
    
    def get_contents (self):
        return self.contents # return the contents of the chest
    
    def set_contents (self, contents):
        self.contents = contents # gamebuilder sets the contents of the chest
    
    