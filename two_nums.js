function twoSum(nums, target) {
    const numIndexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndexMap.has(complement)) {
            return [numIndexMap.get(complement), i];
        }
        numIndexMap.set(nums[i], i);
    }

    return [];
}

// Test the function
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
