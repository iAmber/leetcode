/**
  Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

  A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

  Example 1:

  Input: mat = [[1,0,0],
                [0,0,1],
                [1,0,0]]
  Output: 1
  Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
  Example 2:

  Input: mat = [[1,0,0],
                [0,1,0],
                [0,0,1]]
  Output: 3
  Explanation: (0,0), (1,1) and (2,2) are special positions. 
  Example 3:

  Input: mat = [[0,0,0,1],
                [1,0,0,0],
                [0,1,1,0],
                [0,0,0,0]]
  Output: 2
  Example 4:

  Input: mat = [[0,0,0,0,0],
                [1,0,0,0,0],
                [0,1,0,0,0],
                [0,0,1,0,0],
                [0,0,0,1,1]]
  Output: 3

 */

/**
 * @param {number[][]} mat
 * @return {number}
 */

var numSpecial = function(mat) {
    const m = mat.length, n = mat[0].length;
    const rows = [], cols = [];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            rows[i] = rows[i] ? rows[i] + mat[i][j] : mat[i][j]
            cols[j] = cols[j] ? cols[j] + mat[i][j] : mat[i][j]
        }
    }
    let res = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(rows[i] === 1 && cols[j] === 1 && mat[i][j] === 1) {
                res++
            }
        }
    }
    return res
};