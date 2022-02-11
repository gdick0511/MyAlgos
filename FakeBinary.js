// Instructions (8 kyu)

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My Solution:

function fakeBin(number){
    let conversion = number.split('')
    newarr = []
    for(let i=0; i < conversion.length; i++){
        if(parseInt(conversion[i]) >= 5){
           newarr.push(1)
        }else if(parseInt(conversion[i]) <= 4){
            newarr.push(0)
        }
    }
    return newarr.join('')
}
console.log(fakeBin('555'))

// ALTERNATIVE SOLUTION:

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }