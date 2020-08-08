/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function(nums) {
  if(!nums || !nums.length) return -1;
  const map = {}
  let res = -1
  for (let i = 0, l = nums.length; i < l; i++) {
      const val = nums[i]
      if(map[val]) {
          res = val
          // map[val] += 1
          break
      }
      map[val] = 1
  }
  return res
};
