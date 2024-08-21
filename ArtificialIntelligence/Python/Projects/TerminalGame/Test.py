from Chest import Chest
from Key import Key
from Player import Player

class Test:
    def testChest(self):  # test the Chest class
        method_works = 0 # initialize the method count
        chest = Chest(None, None, None)  # create a chest object

        # Test the set_contents method
        chest.set_contents("contents")  # set the contents of the chest
        assert chest.get_contents() == "contents"  # stop execution if getContents fails
        if chest.get_contents() != "contents":  # if getContents failed to return the correct contents
            print("get_contents() method failed")
        else:
            method_works += 1  # increment the method count
        
        # Test the set_locked method
        chest.set_locked(True) # lock the chest
        assert chest.get_locked() == True # stop execution if getLocked fails
        if chest.get_locked() != True:
            print("get_locked() method failed")
        else:
            method_works += 1

        # Test the set_golden_key method
        golden_key = Key() # create a key object
        chest.set_golden_key(golden_key) # set the key that locked the chest as the golden key
        assert chest.get_golden_key() == golden_key # stop execution if getGoldenKey fails
        if chest.get_golden_key() != golden_key: # if getGoldenKey failed to return the correct key
            print("get_golden_key() method failed") # print an error message
        else: # if getGoldenKey returned the correct key
            method_works += 1 # increment the method count

        # Test the unlock method
        chest.unlock(golden_key) # unlock the chest with the golden key
        assert chest.get_locked() == False # stop execution if getLocked fails
        if chest.get_locked() != False: # if getLocked failed to return the correct status
            print("unlock() method failed") # print an error message
        else: # if getLocked returned the correct status
            method_works += 1 # increment the method count

        # Test the lock method
        chest.lock(golden_key) # lock the chest with the golden key
        assert chest.get_locked() == True # stop execution if getLocked fails
        if chest.get_locked() != True: # if getLocked failed to return the correct status
            print("lock() method failed") # print an error message
        else: # if getLocked returned the correct status
            method_works += 1 # increment the method count

        return method_works == 5 # return True if all methods passed, else return False
    
    def testPlayer(self):
        method_works = 0 # initialize the method count
        player = Player(None, None, None) # create a player object

        # Test the set_x_pos method
        player.set_x_pos(1) # set the x position of the player
        assert player.get_x_pos() == 1 # stop execution if getXPos fails
        if player.get_x_pos() != 1: # if getXPos failed to return the correct x position
            print("get_x_pos() method failed") # print an error message
        else: # if getXPos returned the correct x position
            method_works += 1 # increment the method count

        # Test the set_y_pos method
        player.set_y_pos(1) # set the y position of the player
        assert player.get_y_pos() == 1 # stop execution if getYPos fails
        if player.get_y_pos() != 1: # if getYPos failed to return the correct y position
            print("get_y_pos() method failed") # print an error message
        else: # if getYPos returned the correct y position
            method_works += 1 # increment the method count

        # Test the set_key method
        key = Key() # create a key object
        player.set_key(key) # put the key in the player's inventory
        assert player.get_key() == key # stop execution if getKey fails
        if player.get_key() != key: # if getKey failed to return the correct key
            print("get_key() method failed") # print an error message
        else: # if getKey returned the correct key
            method_works += 1 # increment the method count

        return method_works == 3 # return True if all methods passed, else return False


if __name__ == "__main__":
    test = Test() # create a test object
    passed = test.testChest() # test the Chest class
    if passed: # if the test passed
        print("Chest Test Passed") # print a success message
    else: # if the test failed
        print("Chest Test Failed") # print a failure message

    passed = test.testPlayer() # test the Player class
    if passed: # if the test passed
        print("Player Test Passed") # print a success message
    else: # if the test
        print("Player Test Failed") # print a failure message
