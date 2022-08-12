module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const CLOSE_BRACKETS = [];
  const BRACKETS_PAIR = {};
  bracketsConfig.forEach(([opening,closing])=>{
    OPEN_BRACKETS.push(opening);
    CLOSE_BRACKETS.push(closing);
    BRACKETS_PAIR[closing] = opening;
  })

  function isBracketsOk(str){
    let stack = [];

    for(let i=0; i<str.length; i++){

      let currentSymbol = str[i];

      if(OPEN_BRACKETS.includes(currentSymbol)){
        if(!CLOSE_BRACKETS.includes(currentSymbol)){
          stack.push(currentSymbol)
        } else {
          if(stack.length>0 && stack[stack.length-1] === currentSymbol){
            stack.pop()
          } else {
            stack.push(currentSymbol);
          }
        }
      } else {
        if(stack.length === 0){
          return false;
        }

        let topElement = stack[stack.length-1];

        if(BRACKETS_PAIR[currentSymbol] === topElement){
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  return isBracketsOk(str);
}
