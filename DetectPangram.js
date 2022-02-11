// INSTRUCTION:

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

let words = "the quick brown fox"

function isPangram(string){
    let first = string.split('')
    let cleanInfo = first.filter(e => String(e).trim())
    // This represents the string convereted to an array, after removing all whitespace/empty space inbetween

    return cleanInfo.sort()
}

console.log(isPangram(words))


// console.log(first[i])