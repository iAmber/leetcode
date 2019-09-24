/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  const m = Math.floor(Math.abs(n) / 2)
  const temp = myPow(x, m)
  let res = temp * temp
  if (n % 2 !== 0) { // 指数为奇数
    res = x * res
  }
  if (n < 0) { // 指数为负数
    res = 1 / res
  }
  return res
};
console.log(myPow(1.00001, 123456))