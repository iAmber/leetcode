function print(n,m){ // n 行数 m 列数
  const res = [];
  let start = 1;
  const max = m + n - 2;
  for(let sum = 0; sum <= max; sum++){
    for(let i = 0; i <= sum; i++) {
      const j = sum - i;
      if (j >= m || i >= n) continue;
      if(!res[i]) res[i]=[];
      if(!res[i][j]) res[i][j] = start;
      start++;
    }
  }
  for(let i =0; i< n; i++){
      for(let j = 0; j <m; j++){
          console.log(res[i][j]);
      }
  }
  return res;
}
console.log(print(4,4));