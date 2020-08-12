/**
 * @param {string} s
 * @return {string}
 */
const replaceSpace = function(s) {
  if (typeof s == "string" && s.length >= 0 && s.length <= 10000) {
    return s.replace(/\ /g, '%20');
  }
  return '';
};
