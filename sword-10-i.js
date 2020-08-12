// Fibonacci

//1.非常普通，没有优化的递归通项公式解法

var fib = function(n) {
  const constant = 1000000007;
  if(n <= 1) return n
  return (fib(n - 1) + fib(n - 2)) % constant
};

/**
 * 递归+动态规划解法, 通过保存中间计算结果，减少结果计算时间
 * 优点：空间换时间，所有计算结果都被缓存，下一次计算直接读取缓存结果，性能比较好
 * 缺点：需要额外的储存空间，空间复杂度高
 */
var fib = function(n) {
  const constant = 1000000007;
  const dp = [0, 1]
  function fn(n) {
    if (dp[n]) return dp[n]
    dp[n] = fib(n - 1) + fib(n - 2)
    return dp[n] % constant
  }
  return fn(n)
}

var fib = function(n) {
  const constant = 1000000007;
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[n - 2]) % constant
  }
  return dp[n]
}

/**
 * 循环计算解法
 * 优点：每一次计算结果都能得到利用，易于理解，只保存前两个计算结果，性能最优
 * 缺点：没有明显的缺点，在本题中记得看清题目中取模的要求
 */
var fib = function(n) {
  if (n <= 1) return n
  const constant = 1000000007;
  let a = 0, b = 1;
  while(n > 2){
    const temp = (a + b) % constant;
    [a, b] = [b, temp];
    n--
  }
  return (a + b) % constant;
}
