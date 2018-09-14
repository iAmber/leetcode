/**
 * @param {string} s
 * @return {number}
 */
// 388 ms
const lengthOfLongestSubstring = (s) =>{
  if (s.length == 0 || s.length == 1) return s.length
  let strLength = 1
  let oriArr = s.split('')
  for (let i = 0; i < oriArr.length; i++) {
    let curStr = oriArr[i]
    for (let j = i + 1; j < oriArr.length; j++) {
      if (curStr.includes(oriArr[j])) {
        strLength = Math.max(strLength, curStr.length)
        break;
      } else {
        curStr += oriArr[j]
        if (j == oriArr.length - 1) {
          strLength = Math.max(strLength, curStr.length)
          break;
        }
      }
    }
  }
  return strLength
};

// 68ms
const lengthOfLongestSubstring2 = (s) =>{
  if (s.length == 0 || s.length == 1) return s.length
let strLength = 1
let curStr = ''
for (let i = 0; i < s.length; i++) {
    let index = curStr.indexOf(s.charAt(i))
  if (index !== -1) {
      // repeat		    
      curStr = curStr.slice(index + 1, curStr.length)
      curStr += s.charAt(i)
  } else {
      curStr += s.charAt(i)
  }
  strLength = Math.max(strLength, curStr.length)
}
return strLength
};