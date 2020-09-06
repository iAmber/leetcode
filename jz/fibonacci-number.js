/**
 * 实现斐波那契数列
 */

 /**
 * @param {number} N
 * @return {number}
 */
const fib = function(N) {
  const dp = [0, 1]
  if(N <= 1) return dp[N]
  for(let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[N]
};