from Chest import Chest

class Test:
    def testChest(self):  # test the Chest class
        chest = Chest(True, 0, "Nada")  # create a chest object
        chest.setContents("contents")  # set the contents of the chest
        
        assert chest.getContents() == "contents"  # stop execution if getContents fails
        if chest.getContents() != "contents":  # if getContents failed to return the correct contents
            return False  # return false
        else:
            return True  # return true

if __name__ == "__main__":
    test = Test()
    passed = test.testChest()
    if passed:
        print("Chest Test Passed")
    else:
        print("Chest Test Failed")
