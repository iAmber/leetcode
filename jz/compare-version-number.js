/**
  比较两个版本号 version1 和 version2。
  如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。
 
  */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.'), v2 = version2.split('.');
  let index = 0
  while(index < v1.length || index < v2.length) {
    if(!v1[index]) {
      v1[index] = 0
    }
    if(!v2[index]) {
      v2[index] = 0
    }

    if(+v1[index] > +v2[index]) {
      return 1
    } else if (+v1[index] < +v2[index]) {
      return -1
    } else {
      index++
    }
  }
  return 0
};