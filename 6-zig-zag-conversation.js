/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let result = []
  if (numRows === 1) {
      return s
  }
  if (s && s.length && numRows >= 2) {
    for (let i = 0; i< s.length; i++) {
      const index = 2 * i -2
      if (i === 0 || i === (numRows - 1)) {
        while (index < numRows) {
          result = [...result, s[index]]
        }
      } else {
        const index1 = numRows - 1 - numRows
        while (index < numRows) {
          result = [...result, s[index1], s[index]]
        }
      }
    }
  }
  return result
};
// test 
const s1 = 'PAYPALISHIRING'
console.log(convert(s1, 3))