
const input1 = prompt('enter text')

function swapCase(InputString) {
  // const input1 = prompt('enter text')
  let result = '';
  for (let char of InputString){
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    }else if (char === char.toLowerCase()){
      result += char.toUpperCase();
    }else{
      result += char;
    }
  }
  return result;

}

console.log(swapCase(input1));
window.alert(swapCase(input1));
