//you will get a prompt asking you to enter a text
const input1 = prompt('enter text')
//working on the function meant to swapcharacters
function swapCase(InputString) {
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
//for the program to work you need to call the function
console.log(swapCase(input1));
window.alert(swapCase(input1));
