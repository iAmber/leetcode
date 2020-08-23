// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return true
  return helper(root.left, root.right)
};

const helper = function (left, right) {
  if(!left && !right) return true
  if(!left || !right) return false
  return (left.val === right.val) && helper(left.left, right.right) && helper(left.right, right.left)
}