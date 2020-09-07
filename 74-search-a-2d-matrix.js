/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. 
 * This matrix has the following properties:
 *  Integers in each row are sorted from left to right.
 *  The first integer of each row is greater than the last integer of the previous row.
 */

/**
 * Input:
 * matrix = [
 *     [1,   3,  5,  7],
 *     [10, 11, 16, 20],
 *     [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 // check target and row[0], find row
const searchMatrix = function(matrix, target) {
  if(!matrix || !matrix.length) return false;
  let row = -1
  for(let i = 0;i<matrix.length;i++) {
    if(target >= matrix[i][0]) {
      row = i
    }
  }
  if (row < 0) return false
  return !!(matrix[row].indexOf(target) > -1)
}

// binary-search
const searchMatrix = function(matrix, target) {
    var m = matrix.length;
    if(m == 0)return false;
    var n = matrix[0].length;
    var low = 0;
    var high = m*n - 1;
    while(low<=high){
        var mid = (low+high)>>1;
        var row = parseInt(mid/n);
        var col = mid%n;
        var matrixMid = matrix[row][col];
        if(matrixMid < target){
            low = mid + 1;
        }else if(matrixMid > target){
            high = mid -1;
        }else if(matrixMid == target){
            return true;
        }
    }
    return false;
};
