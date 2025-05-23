name = input("What's your name? ")
match name:
    case "Harry" | "Hermione" | "Ron":
        print("Grayffindor")
    case "Draco":
        print("Slytherin")
    case _:
        print("Who?")