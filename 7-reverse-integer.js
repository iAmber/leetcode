/**
 * @param {number} x
 * @return {number}
 */
// 72 ms
const reverse = function(x) {
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
// 64ms 
const reverse1 = function(num) {
  let negative = false;
  let result = 0;
  if (num < 0) {
    negative = true;
    num = Math.abs(num);
  }
  while (num > 0) {
    mod = num % 10; // mod = 3 // mod = 2 // mod
    num = Math.floor(num / 10); // num = 12 // num = 1
    result = result * 10 + mod; // 0 = 0 * 10 + 3 = 0 + 3 = 3 // 3 = 3 * 10 + 2 = 30 + 2 = 32
  }
  if (result > 2147483647) return 0;
  if (negative) return result * -1;
  return result;
};

const reverse3 = function(x) {
  if (x === 0) return x
  let negative = false;
  let num = x;
  if (num < 0) {
    negative = true;
    num = Math.abs(num);
  }
  if (num < 10) { // 单位数返回本身
  	return x
  }
  let result = 0;
  while (num > 0) {
    mod = num % 10; // mod = 3 // mod = 2 // mod
    num = Math.floor(num / 10); // num = 12 // num = 1
    result = result * 10 + mod; // 0 = 0 * 10 + 3 = 0 + 3 = 3 // 3 = 3 * 10 + 2 = 30 + 2 = 32
  }
  if (result > 2147483647) return 0;
  if (negative) return result * -1;
  return result;
};