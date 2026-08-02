// Task 5 — Multi-level conditions III
// Write a function called checkDiscount that takes a purchase amount. 
// If the amount is divisible by 100, the discount is "20%". 
// If it's divisible by 50 (but not 100), the discount is "10%". 
// If it's divisible by 10 (but not 50 or 100), the discount is "5%". 
// Otherwise, return "No discount".

function checkDiscount(amount) {
    if (amount % 100 === 0) {
        
    }
}

console.log(checkDiscount(200)); // "20%"
console.log(checkDiscount(150)); // "10%"
console.log(checkDiscount(30));  // "5%"
console.log(checkDiscount(23));  // "No discount"