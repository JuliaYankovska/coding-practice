// Task 7
// Create a function called longerString that accepts two string parameters 
// and returns the longer string.

function longerString(firstString, secondString) {
    if(firstString.length > secondString.length) {
        return firstString;
    } else {
        return secondString;
    }
}
console.log(longerString('codemify', 'test'))          // "codemify"
console.log(longerString('automation', 'coding'))      // "automation"
console.log(longerString('automation', 'the codemify')) // "the codemify"