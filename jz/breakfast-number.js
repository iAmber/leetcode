// https://leetcode-cn.com/problems/2vYnGI/

/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */

var breakfastNumber = function(staple, drinks, x) {
  staple = staple.sort((a, b) => a - b)
  drinks = drinks.sort((a, b) => a - b)
  let count = 0;
  const mod = 1e9 + 7
  let j = drinks.length - 1;
  for(let i = 0; i< staple.length; i++) {
      while(j >= 0 && staple[i] + drinks[j] > x) {
          j--
      }
      count += j + 1
  }
  return count % mod
};


