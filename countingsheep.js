// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// function isTrue(){
//     let newArray = []
//     if (i === true){
//         newArray.push(i)
//     }
//     return newArray
// }

let answer = []
let others = []
const arrayOfSheep = 
   [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

const blah = [false, null, true, false]

function countSheeps(arrayOfSheep) {
    arrayOfSheep.map((i) => {
        if (i === true){
            answer.push(i)
        }
    })
    return answer.length
}

// console.log(countSheeps(blah))

function countSheeps(arrayOfSheep){
    const present = arrayOfSheep.filter(sheep => sheep)
    return present.length
}

console.log(countSheeps(arrayOfSheep))

function countSheeps(arrayOfSheep) {
    let answer = []
        arrayOfSheep.forEach((i) => {
            if (i === true){
                answer.push(i)
            }
        })
        return answer.length
    }
    