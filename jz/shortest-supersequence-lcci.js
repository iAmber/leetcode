/**
  假设你有两个数组，一个长一个短，短的元素均不相同。找到长数组中包含短数组所有的元素的最短子数组，其出现顺序无关紧要。

  返回最短子数组的左端点和右端点，如有多个满足条件的子数组，返回左端点最小的一个。若不存在，返回空数组。

  示例 1:

  输入:
  big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7]
  small = [1,5,9]
  输出: [7,10]

  示例 2:

  输入:
  big = [1,2,3]
  small = [4]
  输出: []

 */

/**
 * @param {number[]} big
 * @param {number[]} small
 * @return {number[]}
 */
const shortestSeq = function(big, small) {
  const hash = {}
  for(let i = 0; i < small.length; i++) {
    const item = small[i]
    hash[item] = -1
  }
  const res = [-1, -1]
  let left = 0, right = 0, count = 0, res_l = -1, res_r = -1, minLen = 9999;
  while(right < big.length) {
    let cur = big[right];
    if(s.containsKey(cur)) {
      if(hash[cur] === 0)
      count++;
      hash[cur]++
    }
  }
  for(let i in hash) {
    const cur = hash[i]
    if(hash[i] === -1) return []
    res[0] = Math.min(res[0], cur)
    res[1] = Math.max(cur, res[1])
  }
  return res
};

var big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7], small = [1,5,9]
console.log(shortestSeq(big, small))