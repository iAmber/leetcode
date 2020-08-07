/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = function(matrix, target) {
  if(!matrix || matrix.length) return false;
  let row = -1
  console.log('row:', row);
  const m = matrix.length
  for(let i = 0; i < m; i++) {
    if (matrix[i][0] <= target) {
      row = i;
    }
  }
  if (row < 0) return false
  console.log('row:', row);
  return !!(matrix[row].indexOf(target) > -1)
};

const matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

const target = 26
console.log(findNumberIn2DArray(matrix, target))