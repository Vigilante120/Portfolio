import random
line_break ="-------------------------------------------------------------------------------"
print("Number guessing Game")
print("We have selected a random number between 1 and 100. See if you can guess it in 10 turn."
      " We'll tell you if your guess was too high or too low.")


def loop_game():
    game_range = random.randrange(0, 101)
    attempts = 10

    while attempts > 0:
        try:
            your_guess = int(input("Enter a Guess Between 1 to 100: "))
            if game_range == your_guess:
                print(f"[+] Correct The Random Number was {game_range}.\nThanks For Playing.\n{line_break}")
                break
            else:
                attempts -= 1
                if your_guess < game_range:
                    print(f"[<<] ITS HIGHER THAN {your_guess}.\n{line_break}")

                elif your_guess > game_range:
                    print(f"[>>] ITS LOWER THAN {your_guess}.\n{line_break}")

                if attempts == 0:
                    print(f"[-] You've Exhausted All your attempts! The correct number was {game_range}.\n{line_break}")
        except ValueError:
            print("Invalid Input. Please Enter a NUMERIC VALUE: ")


loop_game()
