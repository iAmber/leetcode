/**
  给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？

  以任意顺序返回这两个数字均可。

  示例 1:

  输入: [1]
  输出: [2,3]
  示例 2:

  输入: [2,3]
  输出: [1,4]

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const missingTwo = function (nums) {
  const len = nums.length + 2
  const hash = {}
  for(let i = 1; i <= len; i++) {
    hash[nums[i - 1]] = true
    if(!hash[i]) {
      hash[i] = false
    }
  }
  let res = []
  for(let key in hash) {
    if (hash[key] === false) {
      res.push(+key)
    }
  }
  return res
}