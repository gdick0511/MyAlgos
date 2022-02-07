// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


// WHAT I AM THINKING:
// I need to take the string and convert it to an Array

// I then need to check the lenth of the array 

// If it is 4 or 6 digits long, return true

// If it is anythign else, return false


// We can use an if else or swtich case statement here to check the array.length

// function validatePIN (pin) {
  
// }

// console.log(validatePIN('000'))

// Found on StackOverflow

// function validatePIN(pin) {
//     if (/^(\d{4}|\d{6})$/.test(pin)) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// Alternate Solution 

function validatePIN (pin) {
    let n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (let i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
}

console.log(validatePIN('1234'))


// I also like this one 

// function validatePIN (pin) {
  
//     var pinlen = pin.length;
//     var isCorrectLength = (pinlen == 4 || pinlen == 6);
//     var hasOnlyNumbers = pin.match(/^\d+$/);
      
//     if(isCorrectLength && hasOnlyNumbers){
//       return true;
//     }
    
//     return false;
  
//   }