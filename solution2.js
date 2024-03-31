function generateArrayB2n(start,end) {
  const result = [];
  for (let i = start; i <= end; i++){
    result.push(i)
  }
  return result
}
//Example usage:
const array1 = generateArrayB2n(4, 7);
console.log(array1);

const array2 = generateArrayB2n(-4, 7)
console.log(array2);