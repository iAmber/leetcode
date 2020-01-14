/*
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  let row = new Set()
  let col = new Set()
  const squar = new Set()
  for (let i = 0; i < 9; i++) {
    row = new Set()
    for (let j = 0; j < 9; j++) {
      const item = board[i][j]
      if (item !== ',') {
        if (!row.has(item)) {
          row.add(item)
        }
        if (col.has(item)) return false
        if (squar.has(item)) return false
      }
    }
  }
  return true
};