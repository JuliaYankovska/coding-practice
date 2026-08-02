// Task 4 — Multi-level conditions II
// Write a function called checkMovieRating that takes a person's 
// age and returns which movies they're allowed to watch: under 13 — "G-rated only", 
// 13-16 — "PG-13 allowed", 17 and older — "R-rated allowed".

function checkMovieRating(age) {
    if (age <= 13) {
        return 'G-rated only';
    } else if (age >= 13 && age <= 16) {
        return 'PG-13 allowed';
    } else {
        return ' R- rated allowed';
    }
}

console.log(checkMovieRating(10)); // "G-rated only"
console.log(checkMovieRating(16));// "PG-13 allowed"
console.log(checkMovieRating(18)); // "R-rated allowed"