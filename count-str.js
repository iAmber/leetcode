function count(str) {
  const res = {};
  if(!str) return res;
  for(let i = 0; i < str.length; i++) {
      const item = str.charAt(i);
      if (item !== ' ') {
        res[item] ?  res[item]++ : res[item] = 1;
      }
  }
  return res;
}
console.log(count('hello world'));