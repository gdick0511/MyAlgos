
const first = [1,1,1,2,3,4,4,4,4]
const third = [1,1,1,2,3,'cat','cat','dog',8,7]
const second = []

// function isUnique(arry){
//     return  arry.filter((currentValue, index, ))
// }

function isUnique(arry){
  return [...new Set(arry)]
}

// let len = arry.length

// function isUnique(arry){
//    obj ={}

//    for (let i of arry){
//        obj[i] = true
//    }
//    return Object.keys(obj)
// }

console.log(isUnique(third))