function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    // Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] *= leftProduct;
        leftProduct *= nums[i];
    }

   

    return output;
}
