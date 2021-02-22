module.exports = function check(str, bracketsConfig) {
  const bracketOpen = bracketsConfig.map((elem) => elem[0]);
  const bracketClose = bracketsConfig.map((elem) => elem[1]);
  const arr = [];
  const strIn = str.split("");

  if (strIn.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i <= strIn.length - 1; i++) {
    if (bracketOpen.includes(strIn[i])) {
      arr.push(strIn[i]);
    }
    
    if (bracketClose.indexOf(strIn[i]) === bracketOpen.indexOf(arr[arr.length - 1])) {
      arr.pop();
    }

    if (bracketOpen.includes(strIn[i]) && bracketClose.includes(strIn[i])) {
      if (arr[arr.length - 1] === strIn[i]) {
        arr.pop();
      } else {
        arr.push(strIn[i]);
      }
    }
  }
  return arr.length === 0;
};
