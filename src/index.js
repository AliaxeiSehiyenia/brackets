module.exports = function check(str, bracketsConfig) {
  const bracketOpen = bracketsConfig.map((elem) => elem[0]);
  const bracketClose = bracketsConfig.map((elem) => elem[1]);
  const arr = [];

  if (str.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i <= str.length - 1; i++) {
    if (bracketOpen.includes(str[i])) {
      arr.push(str[i]);
    }
    
    if (bracketClose.indexOf(str[i]) === bracketOpen.indexOf(arr[arr.length - 1])) {
      arr.pop();
    }

    if (bracketOpen.includes(str[i]) && bracketClose.includes(str[i])) {
      if (arr[arr.length - 1] === str[i]) {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    }
  }
  return arr.length === 0;
};
