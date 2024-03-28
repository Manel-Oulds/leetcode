function trap(height) {
    const n = height.length;
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = n - 1;
    let trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }

    return trappedWater;
}

// Test the function
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // Output: 6
