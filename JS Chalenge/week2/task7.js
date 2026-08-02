// Write a function called isValidLogin that takes two parameters: username and password. 
// If both username and password are not empty strings, 
// return "Login successful". Otherwise, return "Login failed".

function isValidLogin(username, password) {
    if (username !=='' && password !=='') {
        return 'Login successful' 
    } else {
        return 'Login failed';
    }
    }

console.log(isValidLogin("yuliia", "877999")); // "Login successful"
console.log(isValidLogin("", "12345"));       // "Login failed"
console.log(isValidLogin("yuliia", ""));      // "Login failed"