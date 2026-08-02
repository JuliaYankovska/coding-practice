// Task 2 — Multi-level conditions -->
// Write a function called assignShippingCost that
//  takes a package weight 
// (in kg) and returns the shipping cost: up 
// to 1 kg — "$5", 1 to 5 kg — "$10", 5 to 10 kg 
// — "$20", more than 10 kg — "$35".

function assignShippingCost(weight) {
    if (weight < 1) {
        return '$5';
    } else if (weight > 1 && weight < 5) {
        return '$10';
    } else if (weight > 5 && weight < 10) {
        return '$20';
    } else if (weight >= 10) {
        return '$35';
    }
}

console.log(assignShippingCost(0.5)); // "$5"
console.log(assignShippingCost(3));   // "$10"
console.log(assignShippingCost(8));   // "$20"
console.log(assignShippingCost(15));  // "$35" 