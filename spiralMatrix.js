function spiralOrder(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];

    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = [];

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        // Traverse top row from left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse right column from top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

       

       
    }

    return result;
}

