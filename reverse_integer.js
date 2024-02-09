function reverseInteger(x) {
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);
    let reversed = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);

        if (reversed > MAX_INT / 10 || (reversed === MAX_INT / 10 && digit > 7)) {
            return 0;
        }

        if (reversed < MIN_INT / 10 || (reversed === MIN_INT / 10 && digit < -8)) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return reversed;
}

// Test the function
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
