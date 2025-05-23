# Operations with int
x = int(input("What's x? "))
y = int(input("What's y? "))

print(x + y)

# Operations with float
x = float(input("What's x? "))
y = float(input("What's y? "))

# Rounds to the nearest integer
z = round(x + y)

# Rounds to whatver decimals specified in the second argument
w = round(x / y, 2)

# Divides the integers
v = x / y

# Formats a integer so that there is a comma before triple 0
print(f"{z:,}")

# Prints the integer directly
print(w)

# Formats the string to two decimals without using round
print(f"{v:.2f}")