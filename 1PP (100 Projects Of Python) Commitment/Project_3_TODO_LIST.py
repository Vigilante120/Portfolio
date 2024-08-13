from datetime import date

today = date.today().strftime("%Y-%m-%d")


def todo_list():
    tasks = []
    while True:
        print("Welcome To the To-Do Task Manager")
        print("[+]Current Tasks: ")
        for task in tasks:
            print("- " + task)

        new_task = input("Enter a new task (or 'x' to quit): ")

        if new_task.lower() == 'x':
            print("[-]Exiting TO-DO list Manager...")
            break
        tasks.append(new_task)
        print("Task Added Successfully!\n")

        with open(f"{today}.txt", 'w') as data:
            data.writelines(f"{tasks}")


todo_list()




