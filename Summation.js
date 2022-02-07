// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// MY first thoughts:

// function summation(num) {
//     // Code here
//     switch (num){
//         case 9 :
//          return 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
//          break;
//         case 8 :
//             return 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
//          break;
//         case 7 :
//             return 1 + 2 + 3 + 4 + 5 + 6 + 7
//          break;
//         case 6 :
//             return 1 + 2 + 3 + 4 + 5 + 6
//         break;
//         case 5 :
//             return 1 + 2 + 3 + 4 + 5
//         break; 
//         case 4 :
//             return 1 + 2 + 3 + 4
//          break;
//          case 3 :
//             return 1 + 2 + 3 
//         break;
//         case 2 :
//             return 1 + 2 
//         break
//         case 1 :
//             return 0 + 1 
//         break
//     }
// }

// MY FINAL SOLUTION:

// function summation(num){
//     let reducer = (a,b) => a + b
//     let conversion = [...Array(num).keys()]
//     let nice = conversion.slice(1, conversion.length++)
//     let yaw = nice.length + 1
//     let yeet = [...nice,yaw]
//     return yeet.reduce(reducer, 0)
// }

// console.log(summation(8))

// Alternative Solutions:

// function summation(num) {
//     return num * (num + 1) / 2
// }


// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//       result += i;
//     }
    
//     return result;
// }
  
// ANOTHER SOLUTION:

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);