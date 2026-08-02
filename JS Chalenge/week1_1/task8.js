// Task 8
// Create a function called checkEquality that accepts two parameters and returns 
// whether they are strictly equal (same value and same type).

function checkEquality( firstParametrs, secondParametrs ) {
    if (firstParametrs === secondParametrs) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEquality(1, true)) // false
console.log(checkEquality(0, "0"))  // false
console.log(checkEquality(1, 1))    // true