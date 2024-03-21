function removeDuplicates(s) {
    const stack = [];

    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Remove the top element of the stack if it's equal to the current character
        } 
    }

    return stack.join(''); // Join the characters remaining in the stack to form the final string
}

