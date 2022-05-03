// 1) B
// 2) A 
// 3) D 
// 4) D 


// 5) function listener(){
//   let div = document.createElement('div')
//   div.addEventListener('keypress', () => {
//         alert('I have been selected using the keyboard')
//     })
// }

// 6) function setRole(){
//     let headingElements = document.querySelectorAll('h1','h2','h3','h4')
//     headingElements.role = 'presentation'
// }

// 7) function startCountdown(a,b){
//     let sum = a + b 
//     const interval = setInterval(() => {
//         console.log(sum)
//         sum--

//         if (sum < 0){
//             clearInterval(interval)
//             console.log('Done!')
//         }
//     }, 1000)
// }

// console.log(startCountdown(1,4))

// Question 3

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let maxcount = 0;
//     let count = 1;
//     for(let i = 1; i < S.length; i++){
//         if(S.charAt(i) != S.charAt(i - 1)){ 
//             maxcount = Math.max(maxcount, count);
//             count = 1;
//         }
//         else{
//             count++;
//         }
//     }

//     maxcount = Math.max(maxcount, count);    
//     count = 1;
//     let res = 0;
//     for(let i = 1; i < S.length; i++){
//         if(S.charAt(i) != S.charAt(i - 1)){
//             res = res + maxcount - count;
//             count = 1;
//         }
//         else{
//             count++;
//         }
//     }
//     res = res + maxcount - count;
//     return res;
// }

// Question 2 

// function solution(A, K) {
//     var n = A.length;
//     for (var i = 0; i < n - 1; i++) {
//         if (A[i] + 1 < A[i + 1])
//             return false;
//     }
//     if (A[0] = 1 && A[n - 1] != K)
//         return false;
//     else
//         return true;
// }