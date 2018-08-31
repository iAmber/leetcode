/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
      var restNum = target - nums[i];
      if (hash.hasOwnProperty(restNum)) {
          return [hash[restNum], i];
      }
      hash[nums[i]] = i;
  }
};