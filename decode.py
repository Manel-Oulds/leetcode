def decode(file):
    hash_words = {}
    with open(file, "r") as f:
        line = f.readline()
        while line:
            n, val = line.split(" ")
            hash_words[int(n)] =val
            line = f.readline()
    print(hash_words)
    i = 0
    j = 1
    sentence = ""
    while i < len(hash_words):
        sentence += hash_words[i+j] + " "
        i = j 
        j+= 1 
    print (sentence)
        
    

decode("fils.txt")