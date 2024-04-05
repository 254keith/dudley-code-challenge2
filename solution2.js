
function generateArrayB2n(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
let startNumber = parseInt(prompt("Enter the start number"));
let endNumber = parseInt(prompt("Enter the end number"));

window.alert(generateArrayB2n(startNumber, endNumber));
