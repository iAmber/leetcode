/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || !nums.length) return null
  if (nums.length === 1) return new TreeNode(nums[0])
  const len = nums.length
  const mid = Math.floor(len / 2)
  const tree = new TreeNode(nums[mid])
  if (mid > 0) {
    tree.left = sortedArrayToBST(nums.slice(0, mid))
  }
  if (mid < len - 1) {
    tree.right = sortedArrayToBST(nums.slice(mid + 1))
  }
  return tree
};