module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let index = 0; index < str.length; index++) {
    let current = str[index];
    let arr = bracketsConfig.filter((el) => el.includes(current));
    //console.log(arr[0]);
    if (arr[0][0] === arr[0][1] && stack.includes(current)) {
      stack.pop();
    } else {
    if (arr[0][0] === current) {
      
      //console.log(arr[0].indexOf(current));
      stack.push(current);
      /*if (arr[0][0] === arr[0][1]) {
        stack.pop();
      }*/
    } else {
      if (stack.length === 0) {
        return false;
      }
      let top = stack[stack.length - 1];
      //console.log(top);
      if (arr[0][0] === top) {
        stack.pop();
       //console.log(stack);
      } else {
        return false;
      }
      //console.log(stack);
    }
  }
}
  console.log(stack);
  return stack.length === 0;

}
