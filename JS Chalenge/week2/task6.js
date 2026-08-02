// Write a function called canDrive that takes two parameters: age and hasLicense (true/false). 
// If the age is 16 or above and the person has a license, 
// return "Can drive". Otherwise, return "Cannot drive".

function canDrive( age, hasLicense ) {
if (age >= 16 && hasLicense) {
    return "Can drive";
} else { 
    return "Cannot drive"
}
}

console.log(canDrive(18, true));   // "Can drive"
console.log(canDrive(15, true));   // "Cannot drive"
console.log(canDrive(30, false));  // "Cannot drive"