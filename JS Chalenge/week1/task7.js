// Task 7 — Return the Shorter String
// Create a function called `shorterString`.
// It should accept two string parameters and return the shorter string.
// If both strings have the same length, return the second string.

function shorterString(firstString, secondString) {
    if(firstString.length > secondString.length) {
        return secondString;
    } else {
        return firstString;
    };
    };

console.log(shorterString("javascript", "html")); // "html"
console.log(shorterString("cat", "elephant")); // "cat"
console.log(shorterString("code", "test")); // "test"
