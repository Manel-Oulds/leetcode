function lengthOfLongestSubstring(s) {
    let longestLength = 0;
    let charMap = new Map();
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (charMap.has(s[end]) && charMap.get(s[end]) >= start) {
            start = charMap.get(s[end]) + 1;
        }
        charMap.set(s[end], end);
        longestLength = Math.max(longestLength, end - start + 1);
    }

    return longestLength;
}

// Test the function
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3
