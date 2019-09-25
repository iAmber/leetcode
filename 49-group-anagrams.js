/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 设定元素map存储，key为排序后的元素，value为与之match的元素列表，最后遍历map返回结果
const groupAnagrams = function(strs) {
  if (strs.length === 0) {
    return [];
  }
  if (strs.length === 1) return [strs]
  let map = {}
  strs.forEach(item => {
    let sItem = item.split('').sort().join('')
    if (map[sItem]) {
      map[sItem].push(item)
    } else {
      map[sItem] = [item]
    }
  })
  return Object.values(map);
};

console.log(groupAnagrams(["", "tea","","eat","","tea",""]))
console.log(groupAnagrams(["tea","and","ace","ad","eat","dans"]))
const res = groupAnagrams1(["ray","cod","abe","ned","arc","jar","owl","pop","paw","sky","yup","fed","jul","woo","ado","why","ben","mys","den","dem","fat","you","eon","sui","oct","asp","ago","lea","sow","hus","fee","yup","eve","red","flo","ids","tic","pup","hag","ito","zoo"])
console.log(res)