// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

// SOLUTION


// function timeConversion(s) {
//     // Write your code here
//     let input = s.split(':');
//     let hours = parseInt(input[0]);
//     let timeFrame = input[2].slice(2);
//     let seconds = input[2].slice(0,2);
//     if ((timeFrame === 'PM') && (hours !== 12)) {
//         hours += 12;
//     }
//     if ((hours === 12) && (timeFrame === 'AM')) {
//         hours = '00';
//     } else if (hours < 10) {
//         hours = '0' + hours.toString();
//     } else {
//         hours = hours.toString();
//     }
//     return ([hours, input[1], seconds].join(':'));
// }

// Alternate Solution / Better Solution 

function timeConversion(s) {
    // Write your code here
    let hours = s.substr(0, 2);
    let minutes = s.substr(3, 2);
    let seconds = s.substr(-4, 2);
    let modifier = s.substr(-2, 2);
    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    let time = `${hours}:${minutes}:${seconds}`;
    return time;

}