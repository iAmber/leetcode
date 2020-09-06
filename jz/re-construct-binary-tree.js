/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function reConstructBinaryTree(pre, vin) {
  if (!pre || !pre.length) return null
  const root = pre[0]
  const tree = new TreeNode(root)
  const rootIndex = vin.indexOf(root)
  tree.left = reConstructBinaryTree(pre.slice(1, rootIndex + 1), vin.slice(0, rootIndex))
  tree.right = reConstructBinaryTree(pre.slice(rootIndex + 1), vin.slice(rootIndex + 1))
  return tree
}