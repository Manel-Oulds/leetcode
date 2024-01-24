def decode(file):
    hash_words = {}
    with open(file, "r") as f:
        line = f.readline()
        while line:
            n, val = line.split(" ")
            hash_words[n] =val
            line = f.readline()
    print(hash_words)
    

decode("fils.txt")