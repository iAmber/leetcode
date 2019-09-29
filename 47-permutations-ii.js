/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
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
        if (isUnique(res,newArr)) {
          res.push(newArr)
        }
      }
    }
  }
  return [...new Set(res)]
};
function isUnique (arr, aim) {
  for(let i=0;i<arr.length;i++) {
    if (arr[i].toString() === aim.toString()) {
      return false
    }
  }
  return true
}
// console.log(isUnique([[1,2,3]],[1,2,3]))
console.log(permuteUnique([1,2,1]))