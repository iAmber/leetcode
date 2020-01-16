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
  let row = []
  let col = []
  const squar = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!row[i]) row[i] = []
      if (!col[j]) col[j] = []
      const m = 3 * Math.floor(i / 3) + Math.floor(j / 3)
      if (!squar[m]) squar[m] = []
      const item = board[i][j]
      if (item !== '.') {
        if (row[i].includes(item) || col[j].includes(item) || squar[m].includes(item)) {
          return false
        }
        row[i].push(item)
        col[j].push(item)
        squar[m].push(item)
      }
    }
  }
  return true
};

// another

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  let seen = new Set()
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      let number = board[i][j]
      if (number != '.')
        if (
          !hset(seen, number + ' in row ' + i) ||
          !hset(seen, number + ' in column ' + j) ||
          !hset(seen, number + ' in block ' + ~~(i / 3) + '-' + ~~(j / 3))
        )
        return false
    }
  }
  return true
}
function hset(s, val) {
  if (s.has(val)) return false
  else {
    s.add(val)
    return true
  }
}

var a = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
console.log('isValidSudoku:', isValidSudoku(a))