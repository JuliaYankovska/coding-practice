// Write a function called isWeatherGoodForPicnic that takes two parameters: 
// temperature (number) and isRaining (true/false). 
// If the temperature is above 20 and it is not raining, return "Good day for a picnic". 
// Otherwise, return "Not a good day".

function isWeatherGoodForPicnic(temperature, isRaining) {
    if (temperature <= 20 || isRaining ) {
        return 'Not a good day';
    } else {
        return 'Good day for a picnic'
    }
    }
    
console.log(isWeatherGoodForPicnic(25, false)); // "Good day for a picnic"
console.log(isWeatherGoodForPicnic(25, true));   // "Not a good day"
console.log(isWeatherGoodForPicnic(15, false));  // "Not a good day"