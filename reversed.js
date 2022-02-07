// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// MY FINAL SOULUTION 

function digitize(n) {
    let conversion = n.toString().split("").reverse()
    let map = conversion.map((i) => parseInt(i))
    return map
}

console.log(digitize(33454))

