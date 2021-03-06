/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
const permute = function(nums) {
  if (!nums.length) return []
  if (nums.length === 1) return [nums]
  let res = [[nums[0]]]
  for(let i=1;i<nums.length;i++) {
    let len = res.length
    for(let j=0;j<len;j++) {
      let arr = res.shift();
      for(let k = 0; k <= arr.length; k++) {
        let newArr = arr.slice()
        newArr.splice(k, 0, nums[i])
        res.push(newArr)
      }
    }
  }
  return res
};


console.log(permute([1,2,3]))