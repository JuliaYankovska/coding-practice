<!-- Task 1 — Simple Check
Write a function called checkAdult that takes an age (number) as an argument and checks whether the person is an adult. If the age is 18 or above, return "Adult". If not, return "Minor".
javascript
checkAdult(20); // "Adult"
checkAdult(15); // "Minor"
checkAdult(18); // "Adult" -->

<!-- Task 2 — Multi-level conditions
Write a function called assignShippingCost that takes a package weight (in kg) and returns the shipping cost: up to 1 kg — "$5", 1 to 5 kg — "$10", 5 to 10 kg — "$20", more than 10 kg — "$35".
javascript
assignShippingCost(0.5); // "$5"
assignShippingCost(3);   // "$10"
assignShippingCost(8);   // "$20"
assignShippingCost(15);  // "$35" 

Task 3 — String Manipulation
Write a function called capitalizeFirstLetter that takes a string and returns it with the first letter capitalized (the rest of the letters unchanged).
javascript
capitalizeFirstLetter("hello");      // "Hello"
capitalizeFirstLetter("javascript"); // "Javascript"
Task 4 — Multi-level conditions II
Write a function called checkMovieRating that takes a person's age and returns which movies they're allowed to watch: under 13 — "G-rated only", 13-16 — "PG-13 allowed", 17 and older — "R-rated allowed".
javascript
checkMovieRating(10); // "G-rated only"
checkMovieRating(15); // "PG-13 allowed"
checkMovieRating(18); // "R-rated allowed"
Task 5 — Multi-level conditions III
Write a function called checkDiscount that takes a purchase amount. If the amount is divisible by 100, the discount is "20%". If it's divisible by 50 (but not 100), the discount is "10%". If it's divisible by 10 (but not 50 or 100), the discount is "5%". Otherwise, return "No discount".
javascript
checkDiscount(200); // "20%"
checkDiscount(150); // "10%"
checkDiscount(30);  // "5%"
checkDiscount(23);  // "No discount"
Task 6 — Category Checker
Write a function called checkAgeGroup that takes an age (1-100) and returns the age group: 0-12 — "Child", 13-19 — "Teenager", 20-64 — "Adult", 65+ — "Senior".
javascript
checkAgeGroup(8);  // "Child"
checkAgeGroup(16); // "Teenager"
checkAgeGroup(40); // "Adult"
checkAgeGroup(70); // "Senior"
Task 7 — FizzBuzz-style
Write a function called checkNumberType that takes a number. If it's divisible by 2, return "Even". If it's divisible by 7, return "Lucky". If it's divisible by both 2 and 7, return "EvenLucky". If it's not divisible by either, return the number itself.
javascript
checkNumberType(4);  // "Even"
checkNumberType(7);  // "Lucky"
checkNumberType(14); // "EvenLucky"
checkNumberType(5);  // 5
Task 8 — Range Checker
Write a function called checkBMI that takes a body mass index (number). If it's below 18.5, return "Underweight". If it's 18.5 to 24.9, return "Normal". If it's 25 to 29.9, return "Overweight". If it's 30 or above, return "Obese".
javascript
checkBMI(17); // "Underweight"
checkBMI(22); // "Normal"
checkBMI(27); // "Overweight"
checkBMI(32); // "Obese"
Task 9 — Category by String Input
Write a function called checkCardSuit that takes a card suit ("hearts", "diamonds", "clubs", "spades") and returns its color: "hearts" and "diamonds" return "Red", "clubs" and "spades" return "Black". For any other value, return "Unknown suit".
javascript
checkCardSuit("hearts"); // "Red"
checkCardSuit("spades"); // "Black"
checkCardSuit("stars");  // "Unknown suit"
Task 10 — Combined Parameters (Nested Conditions)
Write a function called suggestDrink that takes the weather ("hot", "cold") and time of day ("morning", "evening") and returns a drink suggestion:
hot + morning → "Iced coffee"
hot + evening → "Lemonade"
cold + morning → "Hot tea"
cold + evening → "Hot chocolate"
any other combination → "Water"
javascript
suggestDrink("hot", "morning");  // "Iced coffee"
suggestDrink("cold", "evening"); // "Hot chocolate"
suggestDrink("mild", "noon");    // "Water"