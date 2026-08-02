# JavaScript Practice

## Task 1 — Compare Two Variables

Finish the coding challenge.

Create an `if statement` that checks if the variable `temperature` is greater than the variable `limit`.

If it is, print:

```text
temperature is higher than limit
```

```js
const temperature = 30;
const limit = 25;

// Add your code here
```

---

## Task 2 — Get Word Length

Create a function called `getWordLength`.

It should accept one string parameter and return the 
length of that string.

```js
// Add your code here

console.log(getWordLength("javascript")); // 10
console.log(getWordLength("hello")); // 5
console.log(getWordLength("cat")); // 3
```

---

## Task 3 — Multiply by Three

Create a function called `multiplyByThree`.

It should accept one parameter, multiply it by `3`, and return the result.

```js
// Add your code here

console.log(multiplyByThree(5)); // 15
console.log(multiplyByThree(10)); // 30
console.log(multiplyByThree(20)); // 60

const result = multiplyByThree(4);

console.log(result); // 12
console.log(result + 2); // 14
```

---

## Task 4 — Subtract Two Numbers

Finish the function.

It should accept two parameters, subtract the second number from the first number, and return the result.

```js
function subtract(a, b) {
  // Add your code here
}

console.log(subtract(5, 2)); // 3
console.log(subtract(10, 4)); // 6
console.log(subtract(20, 5)); // 15
console.log(subtract(100, 50)); // 50
```

---

## Task 5 — Is Smaller Than Ten

Finish the function.

It should accept one parameter called `number`.

Check if the number is less than `10`.

Return `true` if it is less than `10`. Otherwise, return `false`.

```js
function isSmallerThan10(number) {
  if (number < 10) {
    // Add your code here
  } else {
    // Add your code here
  }
}

console.log(isSmallerThan10(5)); // true
console.log(isSmallerThan10(9)); // true
console.log(isSmallerThan10(10)); // false
console.log(isSmallerThan10(15)); // false
```

---

## Task 6 — Find the Smaller Number

Finish the function.

It should accept two parameters and return the smaller number.

```js
function findSmallerNumber(firstNumber, secondNumber) {
  if (firstNumber < secondNumber) {
    // Add your code here
  } else {
    // Add your code here
  }
}

console.log(findSmallerNumber(6, 7)); // 6
console.log(findSmallerNumber(10, 3)); // 3
console.log(findSmallerNumber(4, 4)); // 4
console.log(findSmallerNumber(8, 12)); // 8
```

---

## Task 7 — Return the Shorter String

Create a function called `shorterString`.

It should accept two string parameters and return the shorter string.

If both strings have the same length, return the second string.

```js
// Add your code here

console.log(shorterString("javascript", "html")); // "html"
console.log(shorterString("cat", "elephant")); // "cat"
console.log(shorterString("code", "test")); // "test"
```

---

## Task 8 — Strict Inequality Check

Create a function called `checkNotEqual`.

It should accept two parameters and return `true` if their value or type is different.

It should return `false` if both the value and type are equal.

Use strict comparison.

```js
// Add your code here

console.log(checkNotEqual(1, "1")); // true
console.log(checkNotEqual(false, 0)); // true
console.log(checkNotEqual("hello", "hello")); // false
console.log(checkNotEqual(5, 5)); // false
```

---

## Task 9 — Taller Than Me

Create a variable called `myHeight` and give it the value `170`.

Create a function called `compareHeight`.

The function should accept two parameters:

* `name`
* `height`

Return a string saying whether the person is taller or shorter than you.

```js
const myHeight = 170;

// Add your function here

console.log(compareHeight("Anna", 180));
// "Anna is taller than me."

console.log(compareHeight("Tom", 165));
// "Tom is shorter than me."

console.log(compareHeight("Kate", 175));
// "Kate is taller than me."
```
