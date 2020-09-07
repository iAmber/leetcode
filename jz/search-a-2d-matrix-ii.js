/**
 * 在一个二维数组中（每个一维数组的长度相同），
 * 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
Input:
  [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]

 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function Find(target, matrix){
  let rows = matrix.length - 1
  let cols = 0
  while(rows >= 0 && cols < matrix[0].length) {
      const cur = matrix[rows][cols]
      if(cur === target) {
          return true
      } else if (cur > target) {
          rows--
      } else {
          cols++
      }
  }
  return false
};