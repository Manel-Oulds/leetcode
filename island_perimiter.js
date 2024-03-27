function islandPerimeter(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                // Check left neighbor
                if (j > 0 && grid[i][j - 1] === 1) perimeter -= 2;
                // Check top neighbor
                if (i > 0 && grid[i - 1][j] === 1) perimeter -= 2;
            }
        }
    }

    return perimeter;
}

// Test the function
const grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
];
console.log(islandPerimeter(grid)); // Output: 16
