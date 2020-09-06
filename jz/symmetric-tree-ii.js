// 操作给定的二叉树，将其变换为源二叉树的镜像。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
   if(!root) return null
   if (!root.left && !root.right) return root
   let tree = new TreeNode(root.val)
   if (!root.right) {
       tree.right = root.left
   }
   if (!root.left) {
       tree.left = root.right
   }
   tree.left = Mirror(root.right)
   tree.right = Mirror(root.left)
   return tree
}