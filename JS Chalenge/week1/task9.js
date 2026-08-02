// Task 9 — Taller Than Me
// Create a variable called `myHeight`
//  and give it the value `170`.
// Create a function called `compareHeight`.
// The function should accept two parameters:
// * `name`
// * `height`
// Return a string saying whether the person is
//  taller or shorter than you.


const myHeight = 170;

function compareHeight(name, height) {
    if (height > myHeight) {
        return `${name} is taller than me.`;
    } else { return `${name} is shorter than me.`;
    }
    }

console.log(compareHeight("Anna", 180)); // "Anna is taller than me."
console.log(compareHeight("Tom", 165)); // "Tom is shorter than me."
console.log(compareHeight("Kate", 175)); // "Kate is taller than me."
