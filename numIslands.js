function numIslands(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  let visited = [];
  let count = 0;

  function DFS(ele_idx) {
    let i,
      j = ele_idx; // i = 0 ; j =0  // i= -1 , j = 0
    if (
      grid[(i, j)] === 0 ||
      i < 0 ||
      i === grid.length ||
      j < 0 ||
      j === grid[0].length ||
      visited.has(ele_idx)
    ) {
      return null;
    }
    // if(!visited.has(ele_idx)){
    visited.push(ele_idx); // visited = [[0,0], [0,1]]
    DFS([i - 1, j]); //DFS(-1,0)
    DFS([i + 1, j]);
    DFS([i, j - 1]);
    DFS([i, j + 1]);
    // visited.push(ele_idx); // visited = [[0,0]]
    // }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[(i, j)] === 1) {
        DFS([i, j]);
        count++;
      }
    }
  }
  return count;
}
