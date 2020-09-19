/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  // 遇到null返回null，遇到p返回p，遇到q返回q
  if (root == null || root == p || root == q) {
    return root;
  }
  // 左子树的LCA
  let left = lowestCommonAncestor(root.left, p, q);
  // 右子树的LCA
  let right = lowestCommonAncestor(root.right, p, q);
  // p、q分居左右子树，返回父节点root
  if (left && right) {
    return root;
    // 左子树有LCA，返回它
  } else if (left) {
    return left;
    // 否则返回右子树的结果，可能有也可以是null
  } else {
    return right;
  }
};