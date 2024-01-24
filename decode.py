def decode(file):
    hash_words = {}
    with open(file, "r") as f:
        n,val = f.strip().split(" ")
        print(n,val)


decode("fils.txt")