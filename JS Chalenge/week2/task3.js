// Task 3 — String Manipulation
// Write a function called capitalizeFirstLetter that takes a string 
// and returns it with the first letter capitalized (the rest of the letters unchanged).

function capitalizeFirstLetter (string) {
    let result = '';
   return string.charAt(0).toUpperCase() + string.slice(1);
   
}

console.log(capitalizeFirstLetter("hello"));      // "Hello"
console.log(capitalizeFirstLetter("javascript")); // "Javascript"