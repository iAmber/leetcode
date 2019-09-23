/**
 * @param {string} s
 * @return {number}
 */
const romanMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}
const romanToInt = function(s) {
  if (!s) return 0
  if (s.length == 1) {
    return romanMap[s] || 0
  }
  let res = 0
  let i = 0
  while (i < s.length) {
    let curValue = romanMap[s.charAt(i)] || 0
    const nextValue = romanMap[s.charAt(i + 1)] || 0
    console.log('++before', i, curValue, nextValue)
    if (curValue > 0 && nextValue > curValue) {
      curValue = nextValue - curValue
      i = i + 2
    } else {
      i++
    }
    console.log('after', i, '++res', res, 'curValue', curValue)
    res += curValue
  }
  return res
};
romanToInt("GYYYVM")
// romanToInt("GYYYVMGRRSDRT")