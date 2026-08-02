// Task 6
// Finish the function findBiggerNumber. It should accept two parameters 
// and return the larger one.

function findBiggerNumber(firstNumber, secondNumber) {
if (firstNumber > secondNumber) {
    return firstNumber;
} else {
    return secondNumber;
}
}

console.log(findBiggerNumber(6, 7)) // 7
console.log(findBiggerNumber(5, 1)) // 5
console.log(findBiggerNumber(2, 2)) // 2
console.log(findBiggerNumber(5, 3)) // 5
