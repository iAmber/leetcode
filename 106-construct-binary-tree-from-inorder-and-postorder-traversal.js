/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null
  const len = inorder.length
  const root = postorder[len - 1]
  const rootIndex = inorder.indexOf(root)
  const tree = new TreeNode(root)
  const inorder_left = inorder.slice(0, rootIndex)
  const inorder_right = inorder.slice(rootIndex + 1)
  const postorder_left = postorder.slice(0, rootIndex)
  const postorder_right = postorder.slice(rootIndex, postorder.length - 1)
  tree.left = buildTree(inorder_left, postorder_left)
  tree.right = buildTree(inorder_right, postorder_right)
  return tree
};