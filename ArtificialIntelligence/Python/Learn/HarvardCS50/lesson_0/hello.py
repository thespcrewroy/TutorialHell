"""
Print Methods:
name = name.capitalize() --> Capitalize first letter of first word
name = name.title() --> Capitalize first letter of all words inputted
name = name.strip() --> Remove whitespace from strip
"""

# Ask user for their name
name = input("\nWhat is your name? ").lstrip().title().rstrip()

# Split user's name into first name and last name substrings
first, last = name.split(" ")

# Say hello to user
print("\nhello, " + name)

# Another way to say hello to user
print("\nhello, ", end = "")
print(name)

# Another way to say hello to user
print("\nhello, ", name, sep = "")

# Another way to say hello to user
print(f"\nhello, \"{first}\"\n")
