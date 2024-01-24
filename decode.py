def decode(file):
    hash_words = {}
    with open(file, "r") as f:
        line_number = 0
        while line_number < len(f.readlines()):
            print(f.readline())
            line_number += 1

decode("fils.txt")