function getUrlParam(sUrl, sKey) {
  if (!sUrl) return '';
  if (!sKey) return sUrl;
  const sUrlArr = sUrl.split('?');
  if (!sUrlArr || !sUrlArr.length || !sUrlArr[1]) return '';
  const paramStr = sUrlArr[1];
  const res = {};
  paramStr.split('&').forEach(item => {
       const itemArr = item.split('=');
       const key = itemArr[0];
       const value = itemArr[1];
      if (res[key]){
          if (Array.isArray(res[key])) {
              res[key] = [...res[key], value];
          } else {
              res[key] = [res[key], value];
          }
      } else {
          res[key] = value;
      }
   });
   return res[sKey] || '';
}

const url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#heh&nn=0';
console.log(getUrlParam(url, 'key'));