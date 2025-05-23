# Adding the main function allows you to put your functions below your main code
def main():
    my_name = input("What's your name? ")
    hello(my_name)
    hello()

def hello(name = "world"):
    print("hello, ", name)

main()