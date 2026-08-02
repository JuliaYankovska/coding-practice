// Task 1 — Simple Check
// Write a function called checkAdult that
//  takes an age (number) as an argument and 
// checks whether the person is an adult. 
// If the age is 18 or above, return "Adult". 
// If not, return "Minor".

function checkAdult(age) {
    if (age >= 18) {
        return ('Adult')
    } else {
        return ('Minor')
    }
}
console.log(checkAdult(20)); // "Adult"
console.log(checkAdult(15)); // "Minor"
console.log(checkAdult(18)); // "Adult" 