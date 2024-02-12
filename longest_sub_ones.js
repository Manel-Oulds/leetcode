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

    
    }

    return maxLength;
}

