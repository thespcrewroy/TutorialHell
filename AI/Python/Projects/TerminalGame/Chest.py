class Chest ():
    def __init__ (self, locked, golden_key, contents): # constructor
        self.locked = locked # initially true
        self.golden_key = golden_key
        self.contents = contents # initially empty
    
    def lock (self, key): # lock method
        self.locked = True # lock the chest
        self.golden_key = key # assign the key that locked the chest as the golden key

    def unlock (self, key): # unlock method
        if key == self.golden_key: # if the key is the golden key
            self.locked = False # unlock the chest
    
    def isLocked (self):
        return self.locked # return the locked status of the chest
    
    def getContents (self): # getContents method
        return self.contents # return the contents of the chest
    
    def setContents (self, contents): # setContents method
        self.contents = contents # set the contents of the chest
    
    