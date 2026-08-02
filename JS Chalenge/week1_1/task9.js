// Task 9
// Create a variable called myAge and give it the value 35. 
// Create a function called compareAge that accepts two parameters: 
// name and age. Return a string saying whether the person is older or younger than you.

let myAge = 35;
function compareAge(name, age) {
    if (age < myAge) {
        return `${name} is younger than me.`;
    } else {
        return `${name} is older than me.`;
    }
}

console.log(compareAge("Joel", 36))   // "Joel is older than me."
console.log(compareAge("Samuel", 24)) // "Samuel is younger than me."
console.log(compareAge("Lily", 28))   // "Lily is younger than me."