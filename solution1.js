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
//Example usage:
const input = "The Quick Brown Fox";
const output = swapCase(input);
console.log(output);