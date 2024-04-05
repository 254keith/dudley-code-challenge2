// const input1 = prompt('enter value')
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function findPrime(inputArray) {
  let startNumber = parseInt(prompt("Enter the start number"));
  let endNumber = parseInt(prompt("Enter the end number"));

  const result = [];
  for (let num = startNumber; num <= endNumber; num++) {
    if (isPrime(num)) {
      result.push(num);
    }
  }
  return result;
}

window.alert(findPrime());
