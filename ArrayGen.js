//function that generates an array
function generateArrayB2n(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
//prompts user to enter the start and end number
let startNumber = parseInt(prompt("Enter the start number"));
let endNumber = parseInt(prompt("Enter the end number"));
//call the function for it to work
window.alert(generateArrayB2n(startNumber, endNumber));
