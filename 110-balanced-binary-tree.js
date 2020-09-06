/**
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 */

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
<<<<<<< HEAD
var isBalanced = function(root) {
  if(!root) return true
  return !!check(root)
};

const check = root => {
  if (!root) return 1;
  const left = check(root.left)
  if (left === -1) return -1

  const right = check(root.right)
  if (right === -1) return -1

  if(Math.abs(left - right) > 1) return -1

  return (1 + Math.max(left, right))

}
=======
const isBalanced = function(root) {
  if (!root) return true
  const leftDepth = getDepth(root.left)
  const rightDepth = getDepth(root.right)
  if (Math.abs(leftDepth - rightDepth) > 1) {
      return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
};
const getDepth = function(root) {
  if (!root) return 0
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1
}
>>>>>>> 14a886fc22ed40cb620be7c973349f65e35f6c03
