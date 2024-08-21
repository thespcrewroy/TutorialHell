class Key ():
    def use(self, chest):
        chest.unlock(self)  # unlock the chest with this key object