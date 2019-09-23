/**
 * @param {number} num
 * @return {string}
 */
const romanMap = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
}
// 遍历字母表，数/当前字母代表的数字，字母.repeat(商)进行拼接
var intToRoman = function(num) {
  let res = ''
  if (num < 1 || num > 3999) return res
  for (let i in romanMap) {
    if (num >= romanMap[i]) { // num < 字母代表的数字，不需要计算
      const n = num / romanMap[i]
      res += i.repeat(n)
      num = num % romanMap[i]
    }
  }
  return res
};

/**
 * @param {number} num
 * @return {string}
 */
const map = {
  "1000": "M",
  "900": "CM",
  "500": "D",
  "400": "CD",
  "100": "C",
  "90": "XC",
  "50": "L",
  "40": "XL",
  "10": "X",
  "9": "IX",
  "5": "V",
  "4": "IV",
  "1": "I"
};
// 递归，每次找到比当前值小的最大罗马字母进行字母拼接
const intToRoman1 = function(number) {
  const l = fkey(map, number);
  if (number == +l) {
    return map[number];
  }
  return map[l] + intToRoman1(number - +l);
};

function fkey(m, num) {
  const keys = Object.keys(m);
  const sArr = keys.filter(el => +el <= num);
  return +Math.max.apply(Math, sArr);
}
intToRoman1(2999)