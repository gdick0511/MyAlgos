// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// FIRST ATTEMPT
// function squareDigits(num){
//     let answer = num.toString().split('').map((num) => parseInt(num)).map((num) => num * num).join('')
//     return answer 
// }

// SECOND ATTEMPT
function squareDigits(num){
    let answer = num.toString().split('').map((num) => parseInt(num)).map((num) => num * num).join('')
    let first = parseInt(answer)
      return first;
}

console.log(squareDigits(555))
// run 'node [nameOfFile.js] - be sure to console.log the function 