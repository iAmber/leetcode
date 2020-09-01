/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
  const mod = 1000000007
  const dp = [1, 1, 2, 4]
  if (n < 4) return dp[n]
  for(let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod 
  }
  return dp[n]
};

