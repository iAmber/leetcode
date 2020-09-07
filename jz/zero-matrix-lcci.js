/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes = function(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) return;
  let m = matrix.length, n = matrix[0].length
  let rows = new Set(), cols = new Set()
  for(let i = 0; i < m; i++) {
    for(let j =0; j < n; j++) {
      if(matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }
  // row clear
  rows.forEach(i => {
    for(let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = 0
    }
  })
  // col clear
  cols.forEach(i => {
    for(let j = 0; j < matrix.length; j++) {
      matrix[j][i] = 0
    }
  })
  return matrix
}