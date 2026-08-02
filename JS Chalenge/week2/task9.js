// Write a function called canWatchMovie 
// that takes two parameters: age and hasParentalConsent (true/false). 
// If the age is 18 or above, return "Allowed". 
// If the age is under 18 but hasParentalConsent is true, 
// return "Allowed with consent". Otherwise, return "Not allowed".

function canWatchMovie( age, hasParentalConsent ) {
    if (age >=18) {
        return "Allowed";
    } else if (age<18 && hasParentalConsent) {
        return "Allowed with consent";
    } else {
        return "Not allowed";
    }
}

console.log(canWatchMovie(20, false)); // "Allowed"
console.log(canWatchMovie(10, true));  // "Allowed with consent"
console.log(canWatchMovie(15, false)); // "Not allowed"