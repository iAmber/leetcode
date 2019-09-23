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
 * 递归
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


/**
 * 利用
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var a = ['1'];
  for (var i = 1; i < n; i++) {
    a = preStr(a)
  }
  return a.join('')

  function preStr(a) {
    let startIdx = 0
    let endIdx = 0
    let nextArr = []
    while (endIdx < a.length) {
      while(a[startIdx] === a[endIdx]) {
          endIdx++
      }
      let num = endIdx - startIdx
      nextArr.push(num.toString())
      nextArr.push(a[startIdx])
      startIdx = endIdx
    }
    return nextArr
  }
};