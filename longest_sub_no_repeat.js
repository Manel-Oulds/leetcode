// inputString = "abcabcbb";
// Longest Substring Without Repeating Characters: "abc"
// Length: 3


function lengthOfLongestSubstring(s) {
    const charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;
  
    for (let end = 0; end < s.length; end++) {
      const currentChar = s[end];
  
      if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
        // If the current character is already in the substring, update the start pointer
        start = charIndexMap.get(currentChar) + 1;
      }
  
      
  }
}