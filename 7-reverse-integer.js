/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) return x
  const absValue = Math.abs(x)
  if (absValue < 10) { // 单位数返回本身
  	return x
  }
  const isPositive = !!(x > 0)
  let str = absValue.toString().split('')
  const preLast = str.length - 1
  if (str[preLast] === 0) { // 能被10整除
  	str = str.splice(0, preLast)
  }
  str = Number(str.reverse().join(''))
  if (str > 2147483647) return 0
  if (!isPositive) {
  	str = -str
  }
  return str
}