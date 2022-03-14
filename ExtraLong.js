
// This works when the numbers are not insanly huge 

function extraLongFactorials(n) {
 let result = n
 if (n === 0 || n === 1)
 return 1;
 while( n > 1){
     n--;
     result *= n
 }
 return (result)
}

console.log(extraLongFactorials(25))


// HACKER RANK SOULUTION

// function extraLongFactorials(n) {

//     var bigInt = BigInt(n);
//     var factorial = 1n;

//     for (let i = 0n; i < bigInt ; i++) {
//         factorial *= bigInt - i;
//     }
    
//     console.log(factorial.toString());
// }