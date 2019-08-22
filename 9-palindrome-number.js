/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0 || x === 10) return false
  if (x < 10) return true
  let num = x
  let result = 0
  while (num > 0) {
    const mod = num % 10;
    num = Math.floor(num / 10);
    result = result * 10 + mod;
  }
  return !!(result === x)
}