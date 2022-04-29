
// let num = 3.1234564898789

// let rounded = num.toFixed(6)

// console.log(rounded)

// let yee = '01'

// let answer = parseInt(yee)

// console.log(answer)


let string = 'asdfgh'

function blah(string){
    let answer = {}
    for(let i = 0; i < string.length; i++){
        answer[i] = string[i]
    }
 
    let solution = Object.values(answer)

    console.log(solution)
    console.log(answer)
}

console.log(blah(string))