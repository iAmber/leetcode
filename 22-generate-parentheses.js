/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n<0) return []
    if (n===0) return ['']
    return insert2(generateParenthesis(n-1))
};

function insert (arr) {
  const leftItem = '('
  const rightItem = ')'
  let resSet = new Set([])
  arr.forEach(item => {
    if (!item.length) {
      resSet.add('()')
    } else {
      for (let i = 0; i< item.length; i++) {
        // 1. 在item，如() 上遍历，将左括号插入0之后的空隙处，形成(()、()(
        const temp = item.slice(0, i + 1) + leftItem + item.slice(i + 1)
        for (let j = i + 1; j <= temp.length; j++) {
          // 2. 在1的基础上，在左括号之后的每个空隙插入右括号，如(())、(())、()(),并校验是否重复
          const str = temp.slice(0, j + 1) + rightItem + temp.slice(j + 1)
          if (!resSet.has(str)) {
            resSet.add(str)
          }
        }
      }
    }
  })
  return [...resSet]
}

// 在insert的基础上优化、不需要逐步插入右括号，找到每个左括号，并在其之后插入一个完整的括号；再补充完整括号到队尾即可
function insert2 (arr) {
  const leftItem = '('
  let resSet = new Set([])
  arr.forEach(item => {
    if (!item.length) {
      resSet.add('()')
    } else {
      for (let i = 0; i < item.length; i++) {
        if (item.charAt(i) === leftItem || i === item.length - 1) {
          const str = item.slice(0, i + 1) + '()' + item.slice(i + 1)
          if (!resSet.has(str)) {
            resSet.add(str)
          }
        }
      }
    }
  })
  return [...resSet]
}
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis2 = function(n) {
  const res = [];
  backtrack(res, "", 0, 0, n);
  return res;
};
function backtrack(arr, cur, open, close, max) {
  if (cur.length === max * 2) {
    arr.push(cur);
    return;
  }
  if (open < max) backtrack(arr, cur + "(", open + 1, close, max);
  if (close < open) backtrack(arr, cur + ")", open, close + 1, max);
}