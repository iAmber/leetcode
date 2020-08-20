// 操作给定的二叉树，将其变换为源二叉树的镜像。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
  if(!root) return null

  if (!root.left && !root.right) return root

  const temp = root.left 
  root.left = Mirror(root.right)
  root.right = Mirror(temp)
  return root
}
