/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let count = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === '1') {
        count++
        setZero(grid, i, j, m, n)
      }
    }
  }
  return count
};

function setZero(grid, i, j, m, n) {
  if(i < 0 || j < 0 || i === m || j === n || grid[i][j] === '0') return
  grid[i][j] = '0'
  setZero(grid, i, j+1, m, n)
  setZero(grid, i, j-1, m, n)
  setZero(grid, i+1, j, m, n)
  setZero(grid, i-1, j, m, n)
}