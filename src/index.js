module.exports = function check(str, bracketsConfig) {
  let cfg = bracketsConfig;
  let result = [];
  let eqalsBr = 0;
  let openBr = [];
  let closeBr = [];
  let countBr = [];
  for (let n = 0; n < cfg.length;n++) {
      openBr.push(cfg[n][0]);
      closeBr.push(cfg[n][1]);
      countBr[n] = 0;
  }
  console.log('Open = ', openBr, 'Close = ', closeBr)
  for (let i = 0;i < str.length;i++){
      if ( (openBr.indexOf(str[i])) == (closeBr.indexOf(str[i])) ) {
          if (eqalsBr % 2 == 0) {
              result.push(str[i]);
              countBr[openBr.indexOf(str[i])] += 1;
              eqalsBr += 1;
          } else if (eqalsBr % 2 == 1) {
              eqalsBr -= 1;
              result.pop();
              countBr[closeBr.indexOf(str[i])] -= 1;
          }
      } else if (openBr.indexOf(str[i]) !== -1) {
          result.push(str[i]);
          countBr[openBr.indexOf(str[i])] += 1;
      } else if (closeBr.indexOf(str[i]) !== -1) {
          countBr[closeBr.indexOf(str[i])] -= 1;
          if (closeBr.indexOf(str[i]) == openBr.indexOf(result[result.length - 1])) {
              result.pop();

          }
      }
  }

  countBr.forEach(element => {
      (element !== 0) ? (eqalsBr += 1) : (eqalsBr = eqalsBr);
  });

  if (result.length === 0 && eqalsBr === 0) {
      return true
  } else {
      return false;
  }
}