
print("Welcome To our Simple Calculator\n")
line_break ="-------------------------------------------------------------------------------"

options = ("Press + for addition\nPress - for subtraction"
           "\nPress * for multiplication\nPress / for Division\nPress % for modulus\nPress 'x' to Quit\n")


def calc():
    while True:
        print(options)
        option_selection = input("--> Which Calculation you want to perform: ")
        print()
        if option_selection == "x":
            print("[x]Good_Bye Isaac Newton")
            break
        # addition
        elif option_selection == "+":
            x = float(input("Enter 1st number: "))
            y = float(input("Enter 2nd number: "))
            print(f"[+]The sum is = {x + y}\n{line_break}")
        # subtraction
        elif option_selection == "-":
            x = float(input("Enter 1st number: "))
            y = float(input("Enter 2nd number: "))
            print(f"[-]The difference is = {x - y}\n{line_break}")
        # multiply
        elif option_selection == "*":
            x = float(input("Enter 1st number: "))
            y = float(input("Enter 2nd number: "))
            print(f"[*]The product is = {x * y}\n{line_break}")
        # Division
        elif option_selection == "/":
            x = float(input("Enter 1st number: "))
            y = float(input("Enter 2nd number: "))
            print(f"[/]The quotient is = {x / y}\n{line_break}")

        elif option_selection == "%":
            x = float(input("Enter 1st number: "))
            y = float(input("Enter 2nd number: "))
            print(f"[%]The remainder is = {x % y}\n{line_break}")

calc()


# Addition → Sum
# Subtraction → Difference
# Multiplication → Product
# Division → Quotient
# Modulus → Remainder
