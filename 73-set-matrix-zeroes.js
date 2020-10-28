/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  if (!matrix || !matrix[0].length) return;
  const m = matrix.length, n = matrix[0].length;
  const rows = [], cols = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (!rows.includes(i)) {
          rows.push(i)
        }
        if (!cols.includes(j)) {
          cols.push(j)
        }
      }
    }
  }
  for (let i = 0; i < rows.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      matrix[rows[i]][j] = 0;
    }
  }
  for (let i = 0; i < cols.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      matrix[j][cols[i]] = 0;
    }
  }
  return matrix;
};

const arr = [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroes(arr))