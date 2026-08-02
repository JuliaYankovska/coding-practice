// Task 6 — Find the Smaller Number
// Finish the function.
// It should accept two parameters and return 
// the smaller number.


function findSmallerNumber(firstNumber, secondNumber) {
  if (firstNumber < secondNumber) {
   return firstNumber
  } else {
    return secondNumber
  }
}

console.log(findSmallerNumber(6, 7)); // 6
console.log(findSmallerNumber(10, 3)); // 3
console.log(findSmallerNumber(4, 4)); // 4
console.log(findSmallerNumber(8, 12)); // 8
