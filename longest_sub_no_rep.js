function lengthOfLongestSubstring(s) {
    let longestLength = 0;
    let charMap = new Map();
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (charMap.has(s[end]) && charMap.get(s[end]) >= start) {
            start = charMap.get(s[end]) + 1;
        }
      
    }

    return longestLength;
}


