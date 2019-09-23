/**
1. 1
2. 11
3. 21
4. 1211
5. 111221
6. 312211
7. 13112221
8. 1113213211
9. 31131211131221
10. 13211311123113112211
*/
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  if (n === 1) return '1'
  
  let s = countAndSay(n - 1)
  return readMeth(s)
}

// 读数的方法
function readMeth(s) {
  let res = ''
  let count = 1

  for (let i = 0; i < s.length; i++) {
    if (i != s.length - 1) {
      if (s.charAt(i) == (s.charAt(i + 1))) {
        count++;
      } else {
        res = res + (count + '') + s.charAt(i);
        count = 1;
      }
    } else {
      res = res + (count + '') + s.charAt(i)
    }
  }
  return res
}
console.log(countAndSay(9))