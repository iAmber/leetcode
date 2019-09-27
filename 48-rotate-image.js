/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  for (let i = 0; i< matrix.length; i++) {
    for(let j = i; j < matrix[i].length; j++) {
      if (i !== j) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
    }
  }
  for (let i = 0; i< matrix.length; i++) {
    const mid = Math.ceil(matrix[i].length / 2)
    for(let j = 0; j < mid; j++) {
      const rest = matrix[i].length -1 - j
      {
        [matrix[i][j], matrix[i][rest]] = [matrix[i][rest], matrix[i][j]]
      }
    }
  }
  return matrix
};
console.log(rotate([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]))