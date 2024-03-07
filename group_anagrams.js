function groupAnagrams(strs) {
    let anagramsMap = new Map();

    // Iterate through each string in the array
    for (let str of strs) {
        // Sort the characters of the string to identify anagrams
        let sortedStr = str.split('').sort().join('');

        // Add the string to the map with its sorted version as the key
        if (!anagramsMap.has(sortedStr)) {
            anagramsMap.set(sortedStr, []);
        }
        anagramsMap.get(sortedStr).push(str);
    }

    // Convert the map values (arrays of anagrams) to an array of arrays
    return Array.from(anagramsMap.values());
}

