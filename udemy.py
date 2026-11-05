# Welcome to the tip calculator!
# What was the total bill?
# How much would you like to give as tip? 10, 12, or 15?
# How many people to split the bill?
# Each person is to pay? 

print("Welcome to the tip calculator!")
bill = int(input("What is the total bill? #"))
tip = int(input("How much would you like to give as tip: 10, 12, 0r 15? "))
people = int(input("How many people are to split the bill? "))

total = bill * (1 + tip / 100)
each = total/people

print("Each person is to pay" {each})