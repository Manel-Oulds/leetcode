function longestSubarrayWithOnes(nums, k) {
    let maxLength = 0;
    let left = 0;
    let maxOnesCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 1) {
            maxOnesCount++;
        }

        while (right - left + 1 - maxOnesCount > k) {
            if (nums[left] === 1) {
                maxOnesCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test the function
console.log(longestSubarrayWithOnes([1, 1, 0, 0, 1, 1, 1, 0, 0, 0], 2)); // Output: 6
