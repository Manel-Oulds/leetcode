class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxPathSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    function maxPathDown(node) {
        if (!node) return 0;

        // Calculate the maximum sum of a path starting from the current node and going downwards
        const leftSum = Math.max(maxPathDown(node.left), 0);
        const rightSum = Math.max(maxPathDown(node.right), 0);

        // Update the maximum path sum encountered so far
        maxSum = Math.max(maxSum, node.val + leftSum + rightSum);

        // Return the maximum sum of a path starting from the current node and going downwards
        return node.val + Math.max(leftSum, rightSum);
    }

    maxPathDown(root); // Start the recursion from the root node

    return maxSum;
}

// Test the function
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(maxPathSum(root)); // Output: 6
