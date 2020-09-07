/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

 /**
  * Input: [1,0,4,5,3,2,6,7,8]
  * OutPut:[1,5,3,7,0,4,2,6,8]
  */

function reOrderArray(array){
  const oddArray = [], evenArray = [];
  for(let i = 0, len = array.length; i < len; i++) {
    const item = array[i]
    if(item % 2 === 0) {
      evenArray.push(item)
    } else {
      oddArray.push(item)
    }
  }
  return oddArray.concat(evenArray)
}

// another
function reOrderArray(array){
  const len = array.length
  for(let i = 0, count = 0; count < len; count++, i++) {
    const item = array[i]
    if(item % 2 === 0) {
      array.push(item)
      array.splice(i, 1)
      i--
    }
  }
  return array
}
