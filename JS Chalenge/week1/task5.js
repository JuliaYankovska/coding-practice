// Task 5 — Is Smaller Than Ten
// Finish the function.
// It should accept one parameter called `number`.
// Check if the number is less than `10`.
// Return `true` if it is less than `10`. Otherwise, return `false`.


function isSmallerThan10(number) {
  if (number < 10) {
   return true
  } else {
    return false
  }
}

console.log(isSmallerThan10(5)); // true
console.log(isSmallerThan10(9)); // true
console.log(isSmallerThan10(10)); // false
console.log(isSmallerThan10(15)); // false
