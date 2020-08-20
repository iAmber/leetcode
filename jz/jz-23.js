// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回true,否则返回false。
// 假设输入的数组的任意两个数字都互不相同。
// BST left < root < right
function VerifySquenceOfBST(sequence) {
    if (!sequence.length) return false;
    let len = sequence.length - 1;
    let root = sequence[len]; // find the root
    let i = 0; // find the right node
    for (; i < len; i++) {
        if (sequence[i] > root) {
            break;
        }
    }
    for(let j = i; j < len; j++) { // right > root
      if (sequence[j] < root) return false
    }
    let left = true;
    if (i > 0) left = VerifySquenceOfBST(sequence.slice(0,i));
    let right = true;
    if (i < len) right = VerifySquenceOfBST(sequence.slice(i,len));
    return (left&&right);
}

// VerifySquenceOfBST([3, 4, 9, 5, 12, 11, 10])




// 给定一棵满二叉树，判定该树是否为二叉搜索树，是的话打印True，不是的话打印False
// 从根结点给出

function isBST(arr) {
  if (!arr || !arr.length) return false
  const root = arr[0]
  const len = arr.length
  let i = 0
  for(; i < len; i++) {
    if (arr[i] > root) {
      break
    } //  find the right node
  }
  let j = i
  for(; j < len; j++) {
    if (arr[j] < root) return false // right > root
  }
  let left = i > 1 ? isBST(arr.slice(1, i)) : true
  console.log('left', left)
  let right = i < len ? isBST(arr.slice(i, len)) : true
  console.log('right', right)
  return left && right
}

console.log(isBST([10,5,15,3,7,13,18]))