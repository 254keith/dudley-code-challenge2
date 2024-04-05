//function checks whether a number is prime or not
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrime(inputArray) {
  //you will get a prompt asking you to enter the start and end numbers
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
//for the program to work you need to call the function
window.alert(findPrime());
