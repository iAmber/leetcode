// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
/**
 * Input：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output：[1,2,3,6,9,8,7,4,5]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return [];
  const res = []
  let top = 0, left = 0, bottom = matrix.length - 1, right = matrix[0].length - 1;
  while(top <= bottom && left<= right) {
    for(let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++
    for(let i = top; i<= bottom;i++) {
      res.push(matrix[i][right])
    }
    right--
    if (top > bottom || left > right) break;
    for(let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--
    for(i = bottom; i>= top;i--) {
      res.push(matrix[i][left])
    }
    left++
  }
  return res;
};