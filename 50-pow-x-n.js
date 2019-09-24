/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  const isEven = Math.abs(n) % 2 === 0
  let res = 0
  const m = Math.floor(Math.abs(n) / 2)
  const temp = myPow(x, m)
  res = temp * temp
  if (!isEven) {
    res = x * res
  }
  if (n < 0) {
    res = 1 / res
  }
  return res
};
console.log(myPow(1.00001, 123456))