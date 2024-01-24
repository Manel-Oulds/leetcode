def decode(file):
    hash_words = {}
    with open(file, "r") as f:
        line = f.readline()
        while line:
            print(line)
            line = f.readline()

decode("fils.txt")