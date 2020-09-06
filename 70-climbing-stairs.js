/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  const dp = [1, 1, 2]
  if (n < 3) return dp[n]
  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

// another
const climbStairs = function(n) {
  let f1 = 1
  let f2 = 1
  for(let i = 2; i < n; i++) {
    let f_cur = f1 + f2
    f1 = f2
    f2 = f_cur
  }
  return f1 + f2
};


