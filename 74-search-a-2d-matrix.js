/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
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

 // check target and row[0], find row
const searchMatrix = function(matrix, target) {
  if(!matrix || !matrix.length) return false;
  let row = -1
  for(let i = 0;i<matrix.length;i++) {
    if (target < matrix[i][0]) {
      row = i - 1;
      break
    } else {
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


// const searchMatrix = function(matrix, target) {
//   if (!matrix.length || !matrix[0].length) return false;

//   for(let i = 0; i < matrix.length; i++) {
//       let arr = matrix[i];
//       let low = 0;
//       let high = arr.length - 1;

//       if (target < arr[low]) return false;

//       if (target <= arr[high]) {
//           while(low <= high) {
//               let mid = Math.floor(low + (high-low) /2 );
//               if (arr[mid]> target) {
//                   high = mid - 1;
//               } else if (arr[mid] < target) {
//                   low = mid + 1;
//               } else {
//                   return true;
//               }
//           }
//           return false;
//       }
//   }

//   return false;
// };
